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

const Join = dynamic(() => import("@/components/home/join"));
const Introduction = dynamic(() => import("@/components/home/introduction"));
const Projects = dynamic(() => import("@/components/home/projects"));
const PhotoStrip = dynamic(() => import("@/components/home/photo-strip"));
const About = dynamic(() => import("@/components/home/about"));

export default function Home() {
  return (
    <>
      <Container>
        <OpeningAnimation />
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-screen  rounded-2xl relative"
        >
          <Image
            src="/initial.png"
            alt="Logo"
            width={1800}
            height={1800}
            className="w-auto h-[900px] rounded-2xl object-cover"
          />
          <TextAnimation />
        </motion.section>
        <section id="sobre" className="scroll-mt-28">
          <Introduction />
        </section>
        <section id="projetos" className="scroll-mt-28">
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
