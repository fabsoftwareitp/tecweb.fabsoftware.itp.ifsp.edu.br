"use client";

import dynamic from "next/dynamic";

const AnimatedGradient = dynamic(() => import("./animated-gradient"), {
  ssr: false,
});
const CodeParticles = dynamic(() => import("./code-particles"), {
  ssr: false,
});
const MagneticCursor = dynamic(() => import("./magnetic-cursor"), {
  ssr: false,
});

export default function GlobalEffects() {
  return (
    <>
      <AnimatedGradient />
      <CodeParticles />
      <MagneticCursor />
    </>
  );
}

