"use client";

import { LaptopMinimalCheckIcon } from "@/components/ui/laptop-minimal-check";
import { LaughIcon } from "@/components/ui/laugh";
import { PartyPopperIcon } from "@/components/ui/party-popper";
import { SparklesIcon } from "@/components/ui/sparkles";
import Project from "./project";

const items = [
  {
    id: 1,
    title: "Jogos Interativos",
    description: `Foram desenvolvidos dois jogos: o Faster, um jogo de memória que desafia os participantes a relacionar rapidamente o nome e a cor,
       e o Adivinhe o Número, em que o jogador precisa acertar um número aleatório em até três tentativas.
        Assim como na Guerra de Robôs, todos os participantes receberam chaveiros pela participação.`,
    icon: LaughIcon,
  },
  {
    id: 2,
    title: "Guerra de Robôs",
    description: `Criados com Arduino, os robôs duelaram em uma arena cheia de bexigas.
O objetivo era estourar a bexiga do adversário para vencer a batalha.
A atração chamou a atenção pela criatividade e pela interação com o público.`,
    icon: LaptopMinimalCheckIcon,
  },
  {
    id: 3,
    title: "Premiação",
    description: `Após a disputa, os melhores competidores receberam prêmios especiais.
Todos os participantes e visitantes ganharam chaveiros personalizados como lembrança.`,
    icon: PartyPopperIcon,
  },
];

export default function IfCasaAberta() {
  return (
    <Project
      variant="rightToLeft"
      collagesPosition={{
        top: "left",
        bottom: "right",
      }}
      images={[
        {
          src: "/projects/if-casa-aberta/image3.jpg",
          alt: "If Casa Aberta",
        },
        {
          src: "/projects/if-casa-aberta/image4.jpg",
          alt: "If Casa Aberta",
        },
        {
          src: "/projects/if-casa-aberta/image1.jpg",
          alt: "If Casa Aberta",
        },
      ]}
      collages={[
        {
          src: "/collage/fig1.svg",
          alt: "If Casa Aberta",
        },
        {
          src: "/collage/fig2.svg",
          alt: "If Casa Aberta",
        },
      ]}
      cards={[
        {
          title: "IF Casa Aberta",
          description:
            "Nós fizemos um site para o IF Casa Aberta. Nele, os alunos e alunas do IFSP podem participar de atividades culturais, esportivas e de lazer.",
          icon: SparklesIcon,
        },
      ]}
      timeline={items}
    />
  );
}
