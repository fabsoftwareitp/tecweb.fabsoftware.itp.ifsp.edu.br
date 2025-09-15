"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Container from "@/components/container";
import About from "@/components/home/about";
import Introduction from "@/components/home/introduction";
import { PhotoStrip } from "@/components/home/photo-strip";
import { Projects } from "@/components/home/projects";
import TextAnimation from "@/components/home/text-animation";
import OpeningAnimation from "@/components/opening-animation";

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
        <Introduction />
        <Projects />
        <PhotoStrip />
      </Container>
      <About />
    </>
  );
}
