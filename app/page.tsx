"use client";
import Container from "@/components/container";
import CollageBackground from "@/components/home/collage-background";
import { MapComponent } from "@/components/home/map";
import { Structure } from "@/components/home/structure";
import { Teachers } from "@/components/home/teachers";
import TextAnimation from "@/components/home/text-animation";
import OpeningAnimation from "@/components/opening-animation";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

const Join = dynamic(() => import("@/components/home/join"));
const Introduction = dynamic(() => import("@/components/home/introduction"));
const Projects = dynamic(() => import("@/components/home/projects"));
const PhotoStrip = dynamic(() => import("@/components/home/photo-strip"));
const About = dynamic(() => import("@/components/home/about"));
const FloatingShapes = dynamic(
  () => import("@/components/effects/floating-shapes"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen w-screen relative"
      >
        <Image
          src="/initial.png"
          alt="Logo"
          width={1920}
          height={1080}
          className="hidden md:block w-full h-screen object-cover"
          priority
        />
        <TextAnimation />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <Link
            href="#sobre"
            className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Descubra mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors"
            >
              <ChevronDownIcon className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.section>
      <Container>
        <section id="sobre" className="scroll-mt-28">
          <Introduction />
        </section>
        <section id="projetos" className="scroll-mt-28 relative">
          <FloatingShapes />
          <Projects />
        </section>
        <PhotoStrip />
      </Container>
      <About />
      <Join />
      <section id="docentes" className="scroll-mt-28">
        <Teachers />
      </section>
      <div id="estrutura" className="relative scroll-mt-28">
        <CollageBackground />
        <Structure />
      </div>
      <section id="localizacao" className="scroll-mt-28">
        <MapComponent />
      </section>
    </>
  );
}
