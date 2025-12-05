"use client";

import gsap from "gsap";
import { useEffect, useRef, useMemo } from "react";

const shapes = [
  { type: "circle", color: "#2f9e41" },
  { type: "triangle", color: "#cd191e" },
  { type: "square", color: "#2f9e41" },
  { type: "hexagon", color: "#cd191e" },
  { type: "star", color: "#f59e0b" },
];

const ShapeSVG = ({ type, color }: { type: string; color: string }) => {
  switch (type) {
    case "circle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="3" opacity="0.6" />
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke={color} strokeWidth="3" opacity="0.6" />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="15" y="15" width="70" height="70" fill="none" stroke={color} strokeWidth="3" opacity="0.6" rx="5" />
        </svg>
      );
    case "hexagon":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke={color} strokeWidth="3" opacity="0.6" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
            fill="none"
            stroke={color}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      ...shapes[i % shapes.length],
      id: i,
      size: 30 + (i % 4) * 10,
      initialX: `${(i * 12) % 100}%`,
      initialY: `${(i * 15) % 100}%`,
    }));
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".floating-shape");

    elements.forEach((el, index) => {
      const randomX = gsap.utils.random(-50, 50);
      const randomY = gsap.utils.random(-30, 30);
      const randomRotation = gsap.utils.random(-90, 90);
      const duration = gsap.utils.random(10, 20);

      gsap.to(el, {
        x: `+=${randomX}`,
        y: `+=${randomY}`,
        rotation: `+=${randomRotation}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });

    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block"
      aria-hidden="true"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="floating-shape absolute opacity-40"
          style={{
            width: item.size,
            height: item.size,
            left: item.initialX,
            top: item.initialY,
          }}
        >
          <ShapeSVG type={item.type} color={item.color} />
        </div>
      ))}
    </div>
  );
}

