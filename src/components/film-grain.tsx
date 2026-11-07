"use client";

// shaders FilmGrain
// https://shaders.com

import { FilmGrain, Shader } from "shaders/react";

export function FilmGrainLayer() {
  return (
    <Shader
      className="film-grain"
      disableTelemetry
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <FilmGrain strength={0.2} bias={1.4} animated opacity={0.42} blendMode="multiply" />
    </Shader>
  );
}
