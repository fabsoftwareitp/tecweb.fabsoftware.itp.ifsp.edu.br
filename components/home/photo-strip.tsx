"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";
import {
  GalleryHorizontalEndIcon,
  type GalleryHorizontalEndIconHandle,
} from "../ui/gallery-horizontal-end";
import Text from "../ui/text";

const PhotoStrip = () => {
  const galleryIconRef = useRef<GalleryHorizontalEndIconHandle>(null);
  const images = Array.from({ length: 15 }, (_, index) => index + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <div className="flex flex-col gap-4 px-4 md:px-0 overflow-hidden">
      <div className="items-center justify-center flex">
        <div className="relative">
          <Text
            text="Galeria"
            className="text-2xl md:text-4xl font-bold"
            spanClassName="text-4xl md:text-7xl"
          />
          <Image
            src="/collage/fig4.svg"
            alt="Photo Strip"
            width={200}
            height={200}
            className="w-[30px] md:w-[50px] h-auto object-cover rounded-2xl absolute top-[5px] md:top-[10px] right-[-20px] md:right-[-30px] rotate-[20deg] z-[10] swing"
          />
        </div>
      </div>
      
      <section className="hidden md:flex flex-row gap-4 flex-nowrap h-[500px] mt-12 relative">
        {images.map((value, index) => {
          const path = `/photo-strip/image${value.toString()}.jpg`;
          return (
            <motion.div
              key={path}
              initial={{ width: "100%" }}
              whileHover={{ width: "200%" }}
              transition={{ duration: 0.1 }}
              className="transition-all duration-500"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1 * index,
                  ease: "easeInOut",
                }}
                className="transition-all duration-500 h-full w-full"
              >
                <Image
                  key={path}
                  src={path}
                  alt="Photo Strip"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0, rotate: 50 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[200px] lg:w-[300px] h-auto object-cover rounded-2xl absolute top-[-60px] lg:top-[-100px] right-[-60px] lg:right-[-100px] rotate-[20deg] z-[-1]"
        >
          <Image
            src="/collage/fig7.svg"
            alt="Photo Strip"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0, rotate: 50 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[200px] lg:w-[300px] h-auto object-cover rounded-2xl absolute bottom-[-60px] lg:bottom-[-100px] left-[-60px] lg:left-[-100px] rotate-[20deg] z-[-1]"
        >
          <Image
            src="/collage/fig9.svg"
            alt="Photo Strip"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      <section className="flex md:hidden flex-col gap-3 mt-6">
        {images.slice(0, 6).map((value, index) => {
          const path = `/photo-strip/image${value.toString()}.jpg`;
          return (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1 * index,
                ease: "easeInOut",
              }}
              className="w-full"
            >
              <Image
                src={path}
                alt="Photo Strip"
                width={500}
                height={300}
                className="w-full h-[200px] object-cover rounded-xl"
              />
            </motion.div>
          );
        })}
      </section>

      <div className="flex items-center justify-center mt-4 md:mt-0">
        <Link href="/galeria" className="cursor-pointer">
          <Button
            variant="outline"
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-2xl hover:border-green-200 text-sm md:text-base"
            onMouseEnter={() => galleryIconRef.current?.startAnimation?.()}
            onMouseLeave={() => galleryIconRef.current?.stopAnimation?.()}
          >
            <GalleryHorizontalEndIcon ref={galleryIconRef} size={20} />
            Visualizar galeria completa
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoStrip;
