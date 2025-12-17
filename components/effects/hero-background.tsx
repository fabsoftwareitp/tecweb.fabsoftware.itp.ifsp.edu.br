"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const circles = svgRef.current.querySelectorAll(".orbit-circle");
    const dots = svgRef.current.querySelectorAll(".orbit-dot");
    const lines = svgRef.current.querySelectorAll(".connecting-line");

    circles.forEach((circle, index) => {
      gsap.to(circle, {
        rotation: index % 2 === 0 ? 360 : -360,
        transformOrigin: "50% 50%",
        duration: 20 + index * 5,
        repeat: -1,
        ease: "none",
      });
    });

    dots.forEach((dot, index) => {
      const delay = index * 0.3;
      gsap.to(dot, {
        scale: gsap.utils.random(0.8, 1.5),
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(1, 2),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    });

    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: "none",
          delay: index * 0.5,
        }
      );
    });

    return () => {
      gsap.killTweensOf([circles, dots, lines]);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full md:hidden"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f9e41" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2f9e41" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cd191e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#cd191e" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="orbit-circle">
        <circle
          cx="200"
          cy="400"
          r="150"
          fill="none"
          stroke="url(#heroGrad1)"
          strokeWidth="1"
          strokeDasharray="10,5"
        />
        <circle className="orbit-dot" cx="350" cy="400" r="4" fill="#2f9e41" />
        <circle className="orbit-dot" cx="50" cy="400" r="3" fill="#2f9e41" opacity="0.5" />
      </g>

      <g className="orbit-circle">
        <circle
          cx="200"
          cy="400"
          r="100"
          fill="none"
          stroke="url(#heroGrad2)"
          strokeWidth="1"
          strokeDasharray="5,10"
        />
        <circle className="orbit-dot" cx="200" cy="300" r="3" fill="#cd191e" />
        <circle className="orbit-dot" cx="200" cy="500" r="4" fill="#cd191e" opacity="0.7" />
      </g>

      <g className="orbit-circle">
        <circle
          cx="200"
          cy="400"
          r="50"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeDasharray="3,7"
          opacity="0.5"
        />
        <circle className="orbit-dot" cx="250" cy="400" r="2" fill="#f59e0b" />
      </g>

      <line
        className="connecting-line"
        x1="50"
        y1="100"
        x2="150"
        y2="250"
        stroke="#2f9e41"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      <line
        className="connecting-line"
        x1="350"
        y1="150"
        x2="250"
        y2="300"
        stroke="#cd191e"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      <line
        className="connecting-line"
        x1="100"
        y1="600"
        x2="200"
        y2="500"
        stroke="#f59e0b"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      <line
        className="connecting-line"
        x1="300"
        y1="650"
        x2="220"
        y2="480"
        stroke="#2f9e41"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />

      <circle className="orbit-dot" cx="80" cy="200" r="3" fill="#2f9e41" opacity="0.4" />
      <circle className="orbit-dot" cx="320" cy="250" r="2" fill="#cd191e" opacity="0.4" />
      <circle className="orbit-dot" cx="60" cy="550" r="4" fill="#f59e0b" opacity="0.3" />
      <circle className="orbit-dot" cx="340" cy="600" r="3" fill="#2f9e41" opacity="0.5" />
      <circle className="orbit-dot" cx="150" cy="700" r="2" fill="#cd191e" opacity="0.4" />
      <circle className="orbit-dot" cx="280" cy="180" r="3" fill="#f59e0b" opacity="0.4" />

      <polygon
        points="100,150 110,170 90,170"
        fill="none"
        stroke="#2f9e41"
        strokeWidth="1"
        opacity="0.3"
      />
      <rect
        x="290"
        y="550"
        width="20"
        height="20"
        fill="none"
        stroke="#cd191e"
        strokeWidth="1"
        opacity="0.3"
        rx="2"
      />
      <polygon
        points="350,350 360,365 355,380 345,380 340,365"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

