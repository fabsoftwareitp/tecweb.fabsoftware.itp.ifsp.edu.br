"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Text from "@/components/ui/text";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

const categories = [
  {
    name: "Galeria Geral",
    slug: "geral",
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `/photo-strip/image${i + 1}.jpg`,
      alt: `Foto ${i + 1} do curso TSI`,
    })),
  },
  {
    name: "Introdução",
    slug: "introducao",
    images: [
      { src: "/introduction/image1.jpg", alt: "Introdução 1" },
      { src: "/introduction/image2.jpg", alt: "Introdução 2" },
      { src: "/introduction/image3.jpg", alt: "Introdução 3" },
      { src: "/introduction/image4.jpeg", alt: "Introdução 4" },
      { src: "/introduction/image5.jpeg", alt: "Introdução 5" },
      { src: "/introduction/image6.jpeg", alt: "Introdução 6" },
    ],
  },
  {
    name: "IF Casa Aberta",
    slug: "if-casa-aberta",
    images: [
      { src: "/projects/if-casa-aberta/image1.jpg", alt: "IF Casa Aberta 1" },
      { src: "/projects/if-casa-aberta/image2.jpg", alt: "IF Casa Aberta 2" },
      { src: "/projects/if-casa-aberta/image3.jpg", alt: "IF Casa Aberta 3" },
      { src: "/projects/if-casa-aberta/image4.jpg", alt: "IF Casa Aberta 4" },
    ],
  },
  {
    name: "Projeto Ernesta",
    slug: "ernesta",
    images: [
      { src: "/projects/ernesta/image1.jpg", alt: "Projeto Ernesta 1" },
      { src: "/projects/ernesta/image2.jpg", alt: "Projeto Ernesta 2" },
      { src: "/projects/ernesta/image3.jpg", alt: "Projeto Ernesta 3" },
    ],
  },
  {
    name: "Estrutura",
    slug: "estrutura",
    images: [
      { src: "/structure/biblioteca.png", alt: "Biblioteca" },
      { src: "/structure/hardware.jpg", alt: "Laboratório de Hardware" },
      { src: "/structure/labA.jpg", alt: "Laboratório A" },
      { src: "/structure/labC.jpg", alt: "Laboratório C" },
      { src: "/structure/livros.png", alt: "Acervo de Livros" },
      { src: "/structure/turma.jpeg", alt: "Turma" },
    ],
  },
];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredImages =
    activeCategory === "all"
      ? categories.flatMap((cat) => cat.images)
      : categories.find((cat) => cat.slug === activeCategory)?.images || [];

  return (
    <Container className="pt-24 md:pt-32">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <Link href="/">
            <Button variant="ghost" className="w-fit gap-2">
              <ArrowLeftIcon size={18} />
              Voltar ao início
            </Button>
          </Link>

          <Text
            text="Galeria de Fotos"
            className="text-3xl md:text-5xl font-bold"
            spanClassName="text-5xl md:text-9xl"
          />
          <p className="text-neutral-600 text-lg max-w-2xl">
            Confira todas as fotos do curso de Tecnologia em Sistemas para
            Internet do IFSP Campus Itapetininga.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Todas ({categories.reduce((acc, cat) => acc + cat.images.length, 0)})
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.slug
                  ? "bg-primary text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {category.name} ({category.images.length})
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <Zoom>
                <div className="relative group overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium truncate">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </Zoom>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-neutral-500 text-lg">
              Nenhuma foto encontrada nesta categoria.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center py-8"
        >
          <p className="text-neutral-500 text-sm">
            Total de {filteredImages.length} fotos
            {activeCategory !== "all" &&
              ` em "${categories.find((c) => c.slug === activeCategory)?.name}"`}
          </p>
        </motion.div>
      </div>
    </Container>
  );
}

