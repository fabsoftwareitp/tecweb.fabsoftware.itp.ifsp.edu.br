"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll(".parallax-line");

    lines.forEach((line, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = gsap.utils.random(50, 150);

      gsap.to(line, {
        x: direction * speed,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="parallax-line absolute"
          style={{
            top: `${15 + i * 15}%`,
            left: "-10%",
            width: "120%",
          }}
        >
          <svg
            viewBox="0 0 1200 20"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d={`M0,10 Q300,${i % 2 === 0 ? 0 : 20} 600,10 T1200,10`}
              fill="none"
              stroke={i % 2 === 0 ? "#2f9e41" : "#cd191e"}
              strokeWidth="1"
              opacity="0.15"
              strokeDasharray={i % 3 === 0 ? "10,10" : "5,15"}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

