import { ArrowRightIcon } from "lucide-react";
import Text from "../ui/text";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import Container from "../container";
import Image from "next/image";

const items = [
  {
    id: 1,
    description:
      "Participe da ultima edicao do ENEM. Sua nota no ENEM sera usada para o processo seletivo.",
    title: "Faça o ENEM",
    icon: ArrowRightIcon,
  },
  {
    id: 2,
    description: `Selecione o curso "Tecnologia em Sistemas para Internet" no IFSP - Campus Itapetininga.`,
    title: `Inscrição no SISU`,
    icon: ArrowRightIcon,
  },
  {
    id: 3,
    description: `Após o fechamento das inscrições, vocé deve acessar o site do Sisu para verificar se foi aprovado para o curso desejado.`,
    title: "Resultado",
    icon: ArrowRightIcon,
  },
  {
    id: 4,
    description: `Caso seja selecionado, vocé precisará realizar a matrícula conforme as orientações do câmpus.`,
    title: "Matricula",
    icon: ArrowRightIcon,
  },
];

export default function Join() {
  return (
    <div className="flex flex-col gap-8 items-center w-full relative mt-12 md:mt-24 px-4 md:px-0">
      <Image
        src="/ifsp/if-claro.svg"
        alt="Join"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 h-full w-auto opacity-30 md:opacity-100 hidden md:block"
      />
      <Container>
        <div className="flex flex-col gap-8 items-center w-full relative">
          <Text
            text="Como ingressar"
            className="text-2xl md:text-4xl font-bold"
            spanClassName="text-4xl md:text-7xl"
          />
          <Timeline defaultValue={5} className="w-full">
            {items.map((item) => (
              <TimelineItem
                key={item.id}
                step={item.id}
                className="w-full md:w-[calc(50%-1.5rem)] md:odd:ms-auto md:even:text-right md:even:group-data-[orientation=vertical]/timeline:ms-0 md:even:group-data-[orientation=vertical]/timeline:me-8 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2 ms-8 md:ms-0"
              >
                <TimelineHeader>
                  <TimelineSeparator className="-left-6 md:left-auto" />
                  <TimelineTitle className="text-lg md:text-2xl font-extrabold text-primary">
                    {item.title}
                  </TimelineTitle>
                  <TimelineContent className="text-base md:text-xl text-neutral-800">
                    {item.description}
                  </TimelineContent>
                  <TimelineIndicator className="bg-yellow-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none -left-6 md:left-auto">
                    {/* @ts-ignore */}
                    <item.icon size={18} className="text-white" />
                  </TimelineIndicator>
                </TimelineHeader>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Container>
    </div>
  );
}
