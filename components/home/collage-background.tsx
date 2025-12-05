"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

const collageSvgs = [
  "/collage/fig1.svg",
  "/collage/fig2.svg",
  "/collage/fig3.svg",
  "/collage/fig4.svg",
  "/collage/fig5.svg",
  "/collage/fig6.svg",
  "/collage/fig7.svg",
  "/collage/fig8.svg",
  "/collage/fig9.svg",
  "/collage/fig10.svg",
  "/collage/fig11.svg",
];

export default function CollageBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => {
    const total = 14;
    return Array.from({ length: total }).map((_, i) => {
      const src = collageSvgs[i % collageSvgs.length];
      const id = `${src}-${i}-${Math.random().toString(36).slice(2, 9)}`;
      const direction = Math.random() > 0.5 ? "ltr" : "rtl"; // left-to-right or right-to-left
      const size = Math.random() > 0.66 ? 120 : Math.random() > 0.5 ? 100 : 80; // smaller, varied sizes
      return { src, id, direction, size } as const;
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const ctx = gsap.context(() => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;

      const runTeleportLoop = (node: HTMLElement, dir: "ltr" | "rtl") => {
        const margin = 80;
        const startX = dir === "ltr" ? -margin : cw + margin;
        const endX = dir === "ltr" ? cw + margin : -margin;

        const pickY = () =>
          Math.max(0, Math.min(ch - 120, gsap.utils.random(0, ch)));
        const pickDelta = () => gsap.utils.random(80, 200);
        const pickDelay = () => gsap.utils.random(1.5, 3);
        const pickRot = () => gsap.utils.random(-12, 12);
        const pickScale = () => gsap.utils.random(0.85, 1.08);

        let x = startX;
        gsap.set(node, {
          x,
          y: pickY(),
          rotation: pickRot(),
          scale: pickScale(),
          opacity: 0,
        });
        gsap.to(node, { opacity: 0.45, duration: 0.2, ease: "power2.out" });

        const step = () => {
          const delta = pickDelta();
          x = dir === "ltr" ? x + delta : x - delta;

          if ((dir === "ltr" && x >= endX) || (dir === "rtl" && x <= endX)) {
            gsap.to(node, { opacity: 0, duration: 0.15, ease: "power1.out" });
            // restart from the opposite side
            runTeleportLoop(node, dir === "ltr" ? "rtl" : "ltr");
            return;
          }

          // Teleport instantly to the new position with slight randomization
          gsap.set(node, {
            x,
            y: pickY(),
            rotation: pickRot(),
            scale: pickScale(),
          });
          gsap.delayedCall(pickDelay(), step);
        };

        gsap.delayedCall(pickDelay(), step);
      };

      gsap.utils.toArray<HTMLElement>(".collage-float-item").forEach((node) => {
        const dirAttr = node.getAttribute("data-dir");
        const dir = (dirAttr === "ltr" ? "ltr" : "rtl") as "ltr" | "rtl";
        const delay = gsap.utils.random(0, 1.5);
        gsap.delayedCall(delay, () => runTeleportLoop(node, dir));
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      {items.map(({ id, src, direction, size }) => (
        <div
          key={id}
          className="collage-float-item absolute opacity-40"
          data-dir={direction}
          style={{ mixBlendMode: "multiply" }}
        >
          <Image
            src={src}
            alt="Colagem"
            width={size}
            height={size}
            className="w-[100px] h-auto"
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}
