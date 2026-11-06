"use client";

import { useEffect, useRef } from "react";

const CESIUM_BASE = "https://cdn.jsdelivr.net/npm/cesium@1.125.0/Build/Cesium/";
const TILESET = "https://data.map.gov.hk/api/3d-data/3dtiles/f2/tileset.json";
// Published sample key for the Lands Department 3D Visualisation Map.
const MAP_KEY = "3967f8f365694e0798af3e7678509421";

const PINS = [
  { lon: 114.130218, lat: 22.356576, text: "Building site", above: true },
  { lon: 114.129681, lat: 22.355402, text: "Slope site", above: false },
] as const;

const MID_LON = (PINS[0].lon + PINS[1].lon) / 2;
const MID_LAT = (PINS[0].lat + PINS[1].lat) / 2;

type CesiumApi = {
  Viewer: new (element: HTMLElement, options: Record<string, unknown>) => CesiumViewer;
  Cesium3DTileset: { fromUrl: (url: unknown, options?: Record<string, unknown>) => Promise<unknown> };
  Resource: new (options: Record<string, unknown>) => unknown;
  Cartesian3: {
    fromDegrees: (lon: number, lat: number, height: number, ellipsoid?: unknown, result?: unknown) => unknown;
    negate: (value: unknown, result: unknown) => unknown;
  };
  Cartesian2: new (x: number, y: number) => unknown;
  Cartographic: { fromCartesian: (value: unknown) => { height: number } };
  Color: { fromBytes: (r: number, g: number, b: number, a?: number) => unknown; fromCssColorString: (css: string) => unknown };
  Ellipsoid: { WGS84: { geodeticSurfaceNormal: (origin: unknown, result: unknown) => unknown } };
  HeadingPitchRange: new (heading: number, pitch: number, range: number) => unknown;
  Math: { toRadians: (degrees: number) => number };
  Ray: new (origin: unknown, direction: unknown) => unknown;
};

type CesiumViewer = {
  camera: {
    lookAt: (target: unknown, offset: unknown) => void;
    lookAtTransform: (transform: unknown) => void;
  };
  scene: {
    backgroundColor: unknown;
    globe: { show: boolean };
    skyAtmosphere?: { show: boolean };
    fog: { enabled: boolean };
    sun?: { show: boolean };
    moon?: { show: boolean };
    primitives: { add: (tileset: unknown) => unknown };
    screenSpaceCameraController: { enableInputs: boolean };
    preRender: { addEventListener: (listener: () => void) => () => void };
    pickFromRay: (ray: unknown) => { position?: unknown } | undefined;
  };
  entities: { add: (entity: Record<string, unknown>) => { position: unknown } };
  resize: () => void;
  destroy: () => void;
};

declare global {
  interface Window {
    CESIUM_BASE_URL?: string;
    Cesium?: CesiumApi;
  }
}

function loadCesium(): Promise<CesiumApi> {
  if (window.Cesium) return Promise.resolve(window.Cesium);
  window.CESIUM_BASE_URL = CESIUM_BASE;
  const ready = new Promise<CesiumApi>((resolve, reject) => {
    const finish = () => (window.Cesium ? resolve(window.Cesium) : reject(new Error("Cesium missing")));
    let script = document.querySelector<HTMLScriptElement>("script[data-cesium]");
    if (!script) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${CESIUM_BASE}Widgets/widgets.css`;
      document.head.append(link);
      script = document.createElement("script");
      script.src = `${CESIUM_BASE}Cesium.js`;
      script.dataset.cesium = "true";
      script.async = true;
      document.head.append(script);
    }
    script.addEventListener("load", finish);
    script.addEventListener("error", () => reject(new Error("Cesium failed to load")));
    if (window.Cesium) finish();
  });
  return ready;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

export function SiteFilm({ onLive }: { onLive: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const onLiveRef = useRef(onLive);
  onLiveRef.current = onLive;

  useEffect(() => {
    const element = host.current;
    const frame = element?.parentElement;
    if (!element || !frame) return;
    let cancelled = false;
    let viewer: CesiumViewer | undefined;
    let stopRender: (() => void) | undefined;
    let revealWatch: number | undefined;

    loadCesium()
      .then(async (Cesium) => {
        if (cancelled) return;
        const credits = document.createElement("div");
        viewer = new Cesium.Viewer(element, {
          animation: false,
          baseLayer: false,
          baseLayerPicker: false,
          fullscreenButton: false,
          geocoder: false,
          homeButton: false,
          infoBox: false,
          navigationHelpButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: false,
          skyBox: false,
          skyAtmosphere: false,
          creditContainer: credits,
          requestRenderMode: false,
        });
        viewer.scene.globe.show = false;
        if (viewer.scene.skyAtmosphere) viewer.scene.skyAtmosphere.show = false;
        viewer.scene.fog.enabled = false;
        if (viewer.scene.sun) viewer.scene.sun.show = false;
        if (viewer.scene.moon) viewer.scene.moon.show = false;
        viewer.scene.backgroundColor = Cesium.Color.fromCssColorString("#333231");
        viewer.scene.screenSpaceCameraController.enableInputs = false;

        const target = Cesium.Cartesian3.fromDegrees(MID_LON, MID_LAT, 25);
        const started = performance.now();
        stopRender = viewer.scene.preRender.addEventListener(() => {
          const cycle = ((performance.now() - started) / 1000) % 18;
          const ping = cycle < 9 ? cycle / 9 : (18 - cycle) / 9;
          const t = smooth(ping);
          viewer?.camera.lookAt(
            target,
            new Cesium.HeadingPitchRange(
              Cesium.Math.toRadians(-48 + 96 * t),
              Cesium.Math.toRadians(-54 + 22 * t),
              520 - 140 * t,
            ),
          );
        });

        const tileset = (await Cesium.Cesium3DTileset.fromUrl(
          new Cesium.Resource({ url: TILESET, queryParameters: { key: MAP_KEY } }),
          { maximumScreenSpaceError: 6 },
        )) as {
          tilesLoaded: boolean;
          statistics: { numberOfTilesWithContentReady: number };
          tileFailed?: { addEventListener: (listener: (error: { message?: string }) => void) => void };
        };
        if (cancelled || !viewer) return;
        viewer.scene.primitives.add(tileset);
        tileset.tileFailed?.addEventListener((error) => {
          frame.dataset.tileError = error.message ?? "tile failed";
        });
        const reveal = () => {
          if (cancelled || frame.classList.contains("ready")) return;
          frame.classList.add("ready");
          viewer?.resize();
          onLiveRef.current();
        };
        revealWatch = window.setInterval(() => {
          if (tileset.statistics.numberOfTilesWithContentReady > 0 || tileset.tilesLoaded) reveal();
        }, 400);

        const pins = PINS.map((pin) =>
          viewer!.entities.add({
            position: Cesium.Cartesian3.fromDegrees(pin.lon, pin.lat, 25),
            point: {
              pixelSize: 14,
              color: Cesium.Color.fromBytes(92, 107, 84),
              outlineColor: Cesium.Color.fromBytes(245, 245, 244),
              outlineWidth: 3,
              disableDepthTestDistance: Number.POSITIVE_INFINITY,
            },
            label: {
              text: pin.text,
              font: "500 15px Jost, sans-serif",
              fillColor: Cesium.Color.fromBytes(245, 245, 244),
              showBackground: true,
              backgroundColor: Cesium.Color.fromBytes(51, 50, 49, 235),
              backgroundPadding: new Cesium.Cartesian2(8, 5),
              pixelOffset: new Cesium.Cartesian2(16, pin.above ? -30 : 16),
              disableDepthTestDistance: Number.POSITIVE_INFINITY,
            },
          }),
        );

        const heightAt = (lon: number, lat: number) => {
          const origin = Cesium.Cartesian3.fromDegrees(lon, lat, 800);
          const down = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(origin, Cesium.Cartesian3.fromDegrees(0, 0, 0));
          Cesium.Cartesian3.negate(down, down);
          const hit = viewer?.scene.pickFromRay(new Cesium.Ray(origin, down));
          if (!hit?.position) return undefined;
          return Cesium.Cartographic.fromCartesian(hit.position).height;
        };

        for (let attempt = 0; attempt < 24 && !cancelled; attempt += 1) {
          await new Promise((resolve) => window.setTimeout(resolve, 500));
          const heights = PINS.map((pin) => heightAt(pin.lon, pin.lat));
          if (heights.some((height) => height === undefined)) continue;
          const known = heights.filter((height): height is number => height !== undefined);
          Cesium.Cartesian3.fromDegrees(MID_LON, MID_LAT, known.reduce((sum, height) => sum + height, 0) / known.length + 8, undefined, target);
          pins.forEach((entity, index) => {
            const height = heights[index];
            if (height === undefined) return;
            entity.position = Cesium.Cartesian3.fromDegrees(PINS[index].lon, PINS[index].lat, height + 2);
          });
        }
      })
      .catch((error: unknown) => {
        const message = error instanceof Error ? error.message : String(error);
        console.error(error);
        if (!cancelled) frame.dataset.failed = message;
      });

    return () => {
      cancelled = true;
      if (revealWatch) window.clearInterval(revealWatch);
      stopRender?.();
      viewer?.destroy();
    };
  }, []);

  return (
    <div className="film" role="img" aria-label="A three-dimensional model of San Kwai Street, with the slope and the building site marked.">
      <div className="film-view" ref={host} />
    </div>
  );
}
