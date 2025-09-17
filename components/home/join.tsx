import { ArrowRightIcon } from "lucide-react";
import Text from "../ui/text";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
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
    <div className="flex flex-col gap-8 items-center w-full relative mt-24">
      <Image
        src="/ifsp/if-claro.svg"
        alt="Join"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 h-full w-auto"
      />
      <Container>
        <div className="flex flex-col gap-8 items-center w-full relative">
          <Text
            text="Como ingressar"
            className="text-4xl font-bold"
            spanClassName="text-7xl"
          />
          <Timeline defaultValue={5}>
            {items.map((item) => (
              <TimelineItem
                key={item.id}
                step={item.id}
                className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
              >
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineTitle className="text-2xl font-extrabold text-primary">
                    {item.title}
                  </TimelineTitle>
                  <TimelineContent className="text-xl text-neutral-800">
                    {item.description}
                  </TimelineContent>
                  <TimelineIndicator className="bg-yellow-500  group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none ">
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
