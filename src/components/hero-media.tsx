"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { heroFilm, heroSlides } from "@/content/profile";
import Noise from "@/components/noise";

const SiteFilm = dynamic(() => import("@/components/site-film").then((mod) => mod.SiteFilm), {
  ssr: false,
});

const FilmGrainLayer = dynamic(
  () => import("@/components/film-grain").then((mod) => mod.FilmGrainLayer),
  { ssr: false },
);

export function HeroMedia() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [modelLive, setModelLive] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (reduce === false) setShowModel(true);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="hero-media">
      <div className="pane pane-a">
        {heroSlides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            className={slideIndex === index ? "slide on" : "slide"}
            src={slide.src}
            alt={slideIndex === index ? slide.alt : ""}
            width={2000}
            height={1400}
            style={{ objectPosition: slide.focus }}
            aria-hidden={slideIndex === index ? undefined : true}
          />
        ))}
        <Noise opacity={0.14} blendMode="multiply" dust={0} scratches={0} scanlines={0} flicker={0} />
      </div>
      <div className="pane pane-b">
        <img
          className="slide on"
          src={heroFilm.poster}
          alt={modelLive ? "" : heroFilm.alt}
          width={1280}
          height={720}
          aria-hidden={modelLive || undefined}
        />
        {showModel ? <SiteFilm onLive={() => setModelLive(true)} /> : null}
        {showModel ? <FilmGrainLayer /> : null}
        <p className="film-caption">
          {modelLive
            ? "San Kwai Street. 3D Visualisation Map © Lands Department"
            : "San Kwai Street. Aerial photograph © Esri, Maxar, Earthstar Geographics"}
        </p>
      </div>
      <div className="photo-end" id="photo-end" />
    </div>
  );
}
