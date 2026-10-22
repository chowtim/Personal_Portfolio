"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <motion.div
        className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1120px] items-center gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_360px]"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.div
          className="order-2 lg:order-1"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.p variants={fade} className="hero-enter text-sm tracking-wide text-accent">
            {profile.title}
            <span className="text-stone"> · {profile.membership}</span>
          </motion.p>

          <motion.h1
            variants={fade}
            className="hero-enter mt-4 max-w-4xl text-5xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="mt-2 block text-2xl font-normal text-stone sm:text-3xl">
              {profile.chineseName}
            </span>
          </motion.h1>

          <motion.p variants={fade} className="hero-enter mt-6 text-base text-muted sm:text-lg">
            {profile.currentRole}, {profile.organization}
          </motion.p>

          <motion.p
            variants={fade}
            className="hero-enter mt-4 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fade} className="hero-enter mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-[#60a5fa]"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-raised"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={fade} className="hero-enter order-1 justify-self-center lg:order-2 lg:justify-self-end">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/portrait.png`}
            alt={`Portrait of ${profile.name}`}
            width={397}
            height={400}
            priority
            sizes="(min-width: 1024px) 340px, 256px"
            className="w-56 sm:w-64 lg:w-[340px] h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
