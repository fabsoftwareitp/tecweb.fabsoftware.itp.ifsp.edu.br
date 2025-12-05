"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface WaveDividerProps {
  color?: string;
  position?: "top" | "bottom";
  flip?: boolean;
}

export default function WaveDivider({
  color = "#2f9e41",
  position = "bottom",
  flip = false,
}: WaveDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(pathRef.current, {
      attr: {
        d: "M0,64 C160,96 320,32 480,64 C640,96 800,32 960,64 C1120,96 1280,32 1440,64 L1440,128 L0,128 Z",
      },
      duration: 4,
      ease: "sine.inOut",
    });

    tl.to(pathRef.current, {
      attr: {
        d: "M0,64 C160,32 320,96 480,64 C640,32 800,96 960,64 C1120,32 1280,96 1440,64 L1440,128 L0,128 Z",
      },
      duration: 4,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className={`w-full overflow-hidden pointer-events-none ${
        position === "top" ? "-mb-1" : "-mt-1"
      } ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 128"
        className="w-full h-16 md:h-24"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0,64 C160,64 320,64 480,64 C640,64 800,64 960,64 C1120,64 1280,64 1440,64 L1440,128 L0,128 Z"
          fill={color}
          opacity="0.1"
        />
      </svg>
    </div>
  );
}

