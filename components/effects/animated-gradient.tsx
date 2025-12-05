"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function AnimatedGradient() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const blobs = svgRef.current.querySelectorAll(".blob");

    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        attr: {
          cx: `${gsap.utils.random(20, 80)}%`,
          cy: `${gsap.utils.random(20, 80)}%`,
        },
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 2,
      });

      gsap.to(blob, {
        attr: {
          r: gsap.utils.random(150, 300),
        },
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 1.5,
      });
    });

    return () => {
      gsap.killTweensOf(blobs);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
        </filter>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f9e41" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2f9e41" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cd191e" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#cd191e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g filter="url(#goo)">
        <circle className="blob" cx="30%" cy="30%" r="200" fill="url(#grad1)" />
        <circle className="blob" cx="70%" cy="60%" r="180" fill="url(#grad2)" />
        <circle className="blob" cx="50%" cy="80%" r="160" fill="url(#grad3)" />
      </g>
    </svg>
  );
}

