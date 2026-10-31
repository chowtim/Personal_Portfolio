"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { navItems, profile } from "@/content/profile";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const [dark, setDark] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    const end = document.getElementById("photo-end");
    const onScroll = () => {
      if (!end) return;
      setDocked(end.getBoundingClientRect().top <= 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "closed";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  const themeLabel = dark ? "Light" : "Dark";

  return (
    <header className="rail" data-docked={docked ? "true" : "false"}>
      <h1>
        Chow Wing Tim, <span>Martin</span>
      </h1>
      <p className="rail-sentence">{profile.sentence}</p>
      <nav aria-label="Page">
        <ul className="rail-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="text-button" onClick={toggleTheme} aria-pressed={dark}>
        {themeLabel}
      </button>
      <button
        type="button"
        className="text-button menu-button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setOpen((value) => {
            const next = !value;
            if (next) {
              const rail = document.querySelector(".rail");
              if (rail) {
                const top = rail.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top, behavior: "auto" });
              }
            }
            return next;
          });
        }}
      >
        Menu
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="menu"
            initial={reduce ? false : { opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={reduce ? undefined : { opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: reduce ? 0 : 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav aria-label="Page">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <button type="button" onClick={toggleTheme} aria-pressed={dark}>
              {themeLabel} mode
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
