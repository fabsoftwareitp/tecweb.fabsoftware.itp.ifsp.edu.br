"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isGlitching) return;

    const layers = containerRef.current.querySelectorAll(".glitch-layer");

    layers.forEach((layer, index) => {
      gsap.to(layer, {
        x: gsap.utils.random(-5, 5),
        y: gsap.utils.random(-2, 2),
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        ease: "steps(2)",
        onComplete: () => {
          gsap.set(layer, { x: 0, y: 0 });
        },
      });
    });
  }, [isGlitching]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <span className="glitch-layer relative z-10">{text}</span>
      <span
        className="glitch-layer absolute inset-0 text-primary opacity-80"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="glitch-layer absolute inset-0 text-secondary opacity-80"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}

