import { CpuIcon } from "@/components/ui/cpu";
import { LaptopMinimalCheckIcon } from "@/components/ui/laptop-minimal-check";
import { SparklesIcon } from "@/components/ui/sparkles";
import Project from "./project";

export default function Ernesta() {
  return (
    <Project
      variant="leftToRight"
      collagesPosition={{
        top: "right",
        bottom: "left",
      }}
      images={[
        {
          src: "/projects/ernesta/image1.jpg",
          alt: "If Casa Aberta",
        },
        {
          src: "/projects/ernesta/image2.jpg",
          alt: "If Casa Aberta",
        },
        {
          src: "/projects/ernesta/image3.jpg",
          alt: "If Casa Aberta",
        },
        {
          src: "/projects/ernesta/image3.jpg",
          alt: "If Casa Aberta",
        },
      ]}
      collages={[
        {
          src: "/collage/fig6.svg",
          alt: "If Casa Aberta",
        },
        {
          src: "/collage/fig11.svg",
          alt: "If Casa Aberta",
        },
      ]}
      cards={[
        {
          title: "Ciência e Tecnologia nas Escola Pública em Itapetininga",
          description:
            "Nós fizemos um projeto para a Escola Ernesto de Itapetininga. Nele, os alunos e alunas do ensino fundamental podem participar de atividades de ciência e tecnologia.",
          icon: SparklesIcon,
        },
      ]}
      timeline={[
        {
          id: 1,
          title: "Introdução à Tecnologia de Forma Divertida",
          description: `Levamos o projeto da Guerra de Robões para a Escola Ernesto de Itapetininga com o 
              objetivo de mostrar às crianças do ensino fundamental como a tecnologia pode ser divertida e acessível.
               Os alunos tiveram a chance de ver robôs em ação e entender conceitos de eletrônica e programação de forma prática.`,
          icon: LaptopMinimalCheckIcon,
        },
        {
          id: 2,
          title: "Incentivo à Participação e Criatividade",
          description: `A atividade estimulou os estudantes a se envolverem ativamente, 
              despertando curiosidade e criatividade. Ao interagir com os robôs, eles puderam imaginar novas possibilidades, 
              pensar em estratégias e até propor ideias próprias, tornando o aprendizado mais dinâmico e participativo.`,
          icon: SparklesIcon,
        },
        {
          id: 3,
          title: "Engajamento e Futuro na Tecnologia",
          description: `Nosso projeto busca não só entreter, mas também fomentar o interesse contínuo pela ciência e tecnologia. 
              A experiência incentiva os alunos a explorarem o universo da robótica e da programação, 
              plantando sementes para futuros projetos e carreiras na área tecnológica.`,
          icon: CpuIcon,
        },
      ]}
    />
  );
}
