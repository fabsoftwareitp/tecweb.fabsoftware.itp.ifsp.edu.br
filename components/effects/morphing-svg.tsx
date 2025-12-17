"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const paths = [
  "M50,10 C80,10 90,30 90,50 C90,80 70,90 50,90 C20,90 10,70 10,50 C10,20 30,10 50,10",
  "M50,5 C85,15 95,35 95,50 C95,85 75,95 50,95 C15,95 5,75 5,50 C5,15 25,5 50,5",
  "M50,15 C75,5 95,25 95,50 C95,75 85,95 50,95 C25,95 5,75 5,50 C5,25 15,5 50,15",
];

export default function MorphingSVG({ className = "" }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    let currentIndex = 0;

    const morphToNext = () => {
      currentIndex = (currentIndex + 1) % paths.length;
      gsap.to(pathRef.current, {
        attr: { d: paths[currentIndex] },
        duration: 3,
        ease: "power1.inOut",
        onComplete: morphToNext,
      });
    };

    gsap.to(pathRef.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    const timeout = setTimeout(morphToNext, 1000);

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf(pathRef.current);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
    >
      <defs>
        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f9e41" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#cd191e" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={paths[0]}
        fill="none"
        stroke="url(#morphGradient)"
        strokeWidth="2"
      />
    </svg>
  );
}

