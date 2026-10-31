"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { heroDetail, heroSlides, profile } from "@/content/profile";

export function HeroMedia() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

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
            aria-hidden={slideIndex === index ? undefined : true}
          />
        ))}
        <div className="hero-foot">
          <span>{profile.sentence}</span>
        </div>
      </div>
      <div className="pane pane-b">
        <img
          className="slide on"
          src={heroDetail.src}
          alt={heroDetail.alt}
          width={2000}
          height={1400}
        />
      </div>
      <div className="photo-end" id="photo-end" />
    </div>
  );
}
