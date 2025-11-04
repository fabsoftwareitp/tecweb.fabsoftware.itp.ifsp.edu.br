import biblioteca from "@/public/structure/biblioteca.png";
import hardware from "@/public/structure/hardware.jpg";
import labA from "@/public/structure/labA.jpg";
import labC from "@/public/structure/labC.jpg";
import livros from "@/public/structure/livros.png";
import turma from "@/public/structure/turma.jpeg";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Text from "../ui/text";

export const Structure = () => {
  const structure = [
    { src: biblioteca, alt: "Biblioteca" },
    { src: hardware, alt: "Laboratório de Hardware" },
    { src: labA, alt: "Laboratório A" },
    { src: labC, alt: "Laboratório C" },
    { src: livros, alt: "Acervo de Livros" },
    { src: turma, alt: "Turma" },
  ];

  return (
    <div className="flex flex-col gap-8 items-center w-full mt-12">
      <Text
        text="Estrutura"
        className="text-4xl font-bold"
        spanClassName="text-7xl"
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full max-w-7xl px-4">
        {structure.map((item) => (
          <div
            key={item.alt}
            className="mb-6 break-inside-avoid rounded-2xl overflow-hidden"
          >
            <Zoom>
              <Image
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                className="w-full h-auto rounded-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={false}
              />
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};
