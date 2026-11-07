"use client";

// Vengeance UI Animated Button
// https://www.vengenceui.com/components/my-animated-button

import React from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  MotionProps & {
    children?: React.ReactNode;
    as?: any;
  };

/**
 * AnimatedButton
 * - theme-aware: uses Tailwind `dark:` classes so it works in both light and dark mode
 * - accepts all native button props (onClick, className, type, etc.)
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children = "Browse Components",
  className = "",
  as = "button",
  ...rest
}) => {
  const reduce = useReducedMotion();
  const Component = (motion as any)[as] || motion.button;

  return (
    <Component
      {...rest}
      whileHover={reduce ? undefined : { scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      // Set a CSS variable `--shine` that we override for dark mode via Tailwind.
      className={[
        "group inline-flex items-center justify-center px-6 py-2 rounded-none relative overflow-hidden bg-[var(--accent)] text-[var(--accent-ink)] font-medium",
        "[--shine:rgba(255,255,255,.72)]",
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* Text with shine mask */}
      <motion.span
        className="tracking-wide font-light flex items-center justify-center h-full w-full relative z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), rgba(255,255,255,0.55) calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), rgba(255,255,255,0.55) calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
        initial={{ ["--mask-x" as any]: "100%" } as any}
        animate={{ ["--mask-x" as any]: reduce ? "100%" : "-100%" } as any}
        transition={{
          repeat: reduce ? 0 : Infinity,
          duration: reduce ? 0 : 1.8,
          ease: "linear",
          repeatDelay: reduce ? 0 : 3.4,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine effect uses the --shine variable so it adapts to theme */}
      <motion.span
        className="block absolute inset-0 rounded-none p-px"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={
          reduce
            ? { backgroundPosition: "100% 0", opacity: 0 }
            : { backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }
        }
        transition={{
          duration: reduce ? 0 : 1.8,
          repeat: reduce ? 0 : Infinity,
          ease: "linear",
          repeatDelay: reduce ? 0 : 3.4,
        }}
      />
    </Component>
  );
};

export default AnimatedButton;
