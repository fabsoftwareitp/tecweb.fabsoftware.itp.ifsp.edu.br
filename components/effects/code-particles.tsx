"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const codeSymbols = ["</>", "{}", "[]", "()", "=>", "//", "/*", "*/", "&&", "||", "++", "--", "===", "!="];

export default function CodeParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll(".code-particle");

    particles.forEach((particle, index) => {
      const startX = gsap.utils.random(0, window.innerWidth);
      const duration = gsap.utils.random(15, 30);

      gsap.set(particle, {
        x: startX,
        y: -50,
        opacity: 0,
      });

      gsap.to(particle, {
        y: window.innerHeight + 100,
        opacity: gsap.utils.random(0.1, 0.4),
        duration: duration,
        repeat: -1,
        delay: index * 2,
        ease: "none",
        onRepeat: function () {
          gsap.set(particle, {
            x: gsap.utils.random(0, window.innerWidth),
          });
        },
      });

      gsap.to(particle, {
        rotation: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      gsap.killTweensOf(particles);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="code-particle absolute font-mono text-sm"
          style={{
            color: i % 3 === 0 ? "#2f9e41" : i % 3 === 1 ? "#cd191e" : "#f59e0b",
          }}
        >
          {codeSymbols[i % codeSymbols.length]}
        </div>
      ))}
    </div>
  );
}

