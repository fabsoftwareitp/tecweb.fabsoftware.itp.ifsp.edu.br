import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Text from "../ui/text";

export const Structure = () => {
  const structure = [
    {
      image: "/structure/biblioteca.png",
    },
    {
      image: "/structure/hardware.jpg",
    },
    {
      image: "/structure/labA.jpg",
    },
    {
      image: "/structure/labC.jpg",
    },
    {
      image: "/structure/livros.png",
    },
    {
      image: "/structure/turma.jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center w-full mt-12">
      <Text
        text="Estrutura"
        className="text-4xl font-bold"
        spanClassName="text-7xl"
      />

      <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {structure.map((item) => (
          <Zoom key={`zoom-${item.image}`}>
            <Image
              key={item.image}
              src={item.image}
              alt="Estrutura"
              width={500}
              height={500}
              className="w-[500px] h-[500px] object-cover rounded-2xl"
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
};
