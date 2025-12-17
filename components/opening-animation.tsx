"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OpeningAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll(".draw-path");
    
    paths.forEach((path, index) => {
      const length = (path as SVGPathElement).getTotalLength?.() || 100;
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999999999] overflow-hidden pointer-events-none">
      <motion.div
        className="w-screen h-screen fixed bg-white z-40 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 200 100"
          className="w-48 md:w-64 h-auto"
        >
          <text
            x="100"
            y="60"
            textAnchor="middle"
            className="draw-path"
            fill="none"
            stroke="#2f9e41"
            strokeWidth="1"
            fontSize="40"
            fontFamily="serif"
            fontStyle="italic"
          >
            TSI
          </text>
          <circle
            className="draw-path"
            cx="100"
            cy="50"
            r="45"
            fill="none"
            stroke="#cd191e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-[#1a7a2e] z-50"
        initial={{
          right: "-1920px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary z-50"
        initial={{
          right: "-2200px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="w-[1920px] h-screen fixed bg-[#4abe5c] z-50"
        initial={{
          right: "-2500px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
