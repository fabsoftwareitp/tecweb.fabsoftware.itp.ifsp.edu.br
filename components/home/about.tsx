import Image from "next/image";
import Container from "../container";
import { Separator } from "../ui/separator";
import Text from "../ui/text";
import { motion } from "motion/react";

export default function About() {
  const Card = ({
    title,
    description,
    image,
    index,
  }: {
    title: string;
    description: string;
    image: string;
    index: number;
  }) => {
    const radial = {
      1: "bg-radial-[at_50%_50%]",
      2: "bg-radial-[at_50%_75%]",
      3: "bg-radial-[at_25%_25%]",
      4: "bg-radial-[at_75%_75%]",
      5: "bg-radial-[at_25%_75%]",
      6: "bg-radial-[at_75%_25%]",
    };
    const sortRadial =
      radial[Number(Math.floor(Math.random() * 6) + 1) as keyof typeof radial];
    const sortRotate = Math.floor(Math.random() * 360);

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="border border-neutral-200 rounded-2xl p-4 flex flex-col gap-2 items-center justify-center w-full max-w-[50em]"
      >
        <div
          className={`w-full flex flex-row gap-2 items-center justify-center border border-neutral-200 rounded-lg h-[200px] bg-linear-to-b from-primary overflow-hidden to-primary/60 ${sortRadial} border-2 border-neutral-200 `}
        >
          <Image
            src={`/about/${image}`}
            alt="Figurinha"
            width={1080}
            height={500}
            className={` object-cover rounded-2xl rotate-[${sortRotate}deg] w-full h-full`}
          />
        </div>
        <Separator orientation="horizontal" className="w-full" />
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-xl">{description}</p>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center justfiy-center  w-screen h-[3500px]  overflow-visible bg-[url('/background/image4.png')] bg-no-repeat bg-cover">
      <Container className="h-full">
        <div className="w-full  items-center justify-center flex flex-col h-full gap-8">
          <Text
            text="Sobre"
            className="text-5xl font-bold"
            spanClassName="text-9xl"
          />
          <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
            <Card
              title="Dias e Horários"
              description="Segunda á sexta-feira - Período noturno"
              image="dias.png"
              index={1}
            />
            <Card
              title="Duração do Curso"
              description="36 Meses"
              image="duracao.png"
              index={2}
            />
            <Card
              title="Previsão do início das aulas"
              description="1º Semestre - 2025"
              image="previsao.png"
              index={3}
            />
            <Card
              title="Vagas"
              description="40 Vagas"
              image="vagas.png"
              index={4}
            />
            <Card
              title="Localização"
              description="Campus Itapetininga"
              image="localizacao.png"
              index={5}
            />
            <Card
              title="Custo"
              description="Curso gratuito"
              image="custo.png"
              index={6}
            />
          </div>
        </div>
      </Container>

      {/* Adicionar opacidade apenas nas bordas, para fazer a transição de um fundo para o outro   */}
      {/* <Image src="/background/image4.png" alt="About" width={2000} height={2000} className="w-screen h-auto object-contain absolute opacity-50"   /> */}
    </div>
  );
}
