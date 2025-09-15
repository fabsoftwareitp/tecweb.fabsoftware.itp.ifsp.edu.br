"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  type ForwardRefExoticComponent,
  Fragment,
  type RefAttributes,
  useRef,
} from "react";
import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@/components/ui/arrow-right";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

interface ProjectProps {
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
  collages: {
    src: string;
    alt: string;
  }[];
  cards: {
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<any & RefAttributes<any>>;
  }[];
  timeline: TimelineProps[];
  variant: "leftToRight" | "rightToLeft";
  collagesPosition: {
    top: "left" | "right";
    bottom: "left" | "right";
  };
}

interface TimelineProps {
  id: number;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<any & RefAttributes<any>>;
}

export default function Project({
  images,
  collages,
  timeline: timelineProps,
  cards: Cards,
  variant,
  collagesPosition,
}: ProjectProps) {
  const arrowRightRef = useRef<ArrowRightIconHandle>(null);
  const Collages = () => {
    const topCollagePosition =
      collagesPosition.top === "left" ? " left-[-50px]" : "right-[-50px]";

    const bottomCollagePosition =
      collagesPosition.bottom === "right" ? " right-[-50px]" : " left-[-50px]";

    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 10, rotate: 20, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "transition-all duration-500 absolute top-[-50px] rounded-2xl object-cover w-[100px] h-[100px] rotate-[-20deg] z-10",
            topCollagePosition,
          )}
        >
          <Image
            src={collages[0].src}
            alt={collages[0].alt}
            width={500}
            height={500}
            className="hover:scale-110 transition-all duration-500"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 10, rotate: 20, scale: 0 }}
          className={cn(
            "absolute bottom-[-50px] rounded-2xl object-cover w-[100px] h-[100px] rotate-[20deg] z-10",
            bottomCollagePosition,
          )}
        >
          <Image
            src={collages[1].src}
            alt={collages[1].alt}
            width={500}
            height={500}
            className="hover:scale-110 transition-all duration-500"
          />
        </motion.div>
      </>
    );
  };

  const CardsComponent = () => {
    const infoRef = useRef<ArrowRightIconHandle>(null);

    return (
      <>
        {Cards.map((card, index) => (
          <Fragment key={card.title}>
            <motion.div
              className="w-full flex flex-col gap-2 p-4 rounded-2xl  "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => {
                infoRef.current?.startAnimation();
              }}
              onMouseLeave={() => {
                infoRef.current?.stopAnimation();
              }}
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <Separator
                  orientation="horizontal"
                  className="data-[orientation=horizontal]:w-[30%]"
                />
                <div className="flex flex-row gap-2 items-center justify-center">
                  {/* @ts-ignore */}
                  {/*  <card.icon
                    size={20}
                    className="text-yellow-500"
                    ref={infoRef}
                  /> */}
                  <h2 className="text-2xl font-bold text-center">
                    {card.title}
                  </h2>
                </div>
                <Separator
                  orientation="horizontal"
                  className="data-[orientation=horizontal]:w-[30%]"
                />
              </div>
              {/*  <p className="z-[999] text-xl">{card.description}</p> */}
            </motion.div>

            {index < Cards.length - 1 && (
              <Separator
                className="mx-4 data-[orientation=vertical]:h-[50px]"
                orientation="vertical"
              />
            )}
          </Fragment>
        ))}
      </>
    );
  };

  const Left = () => {
    return (
      <div className="flex flex-row gap-2 relative w-full max-w-[40%] max-h-[550px]">
        <Collages />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[50%] rounded-2xl object-cover"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={500}
            height={500}
            className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-all duration-500"
          />
        </motion.div>
        <div className="flex flex-col gap-2  justify-between relative">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={500}
              height={500}
              className={cn(
                "rounded-2xl h-full w-auto object-cover hover:scale-[1.02] transition-all duration-500",
                images[1].className,
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={500}
              height={500}
              className={cn(
                "rounded-2xl object-cover hover:scale-[1.02] transition-all duration-500",
                images[2].className,
              )}
            />
          </motion.div>

          {images.length > 2 &&
            images.map(
              (image, index) =>
                index > 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    key={image.src}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className={cn(
                        "rounded-2xl object-cover hover:scale-[1.02] transition-all duration-500",
                        image.className,
                      )}
                    />
                  </motion.div>
                ),
            )}
          <div className="flex items-center justify-center w-full absolute bottom-2">
            <Link
              href="#"
              onMouseEnter={() => arrowRightRef.current?.startAnimation()}
              onMouseLeave={() => arrowRightRef.current?.stopAnimation()}
            >
              <Badge variant="outline" className="bg-white">
                Ver mais <ArrowRightIcon ref={arrowRightRef} size={18} />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const Right = () => {
    return (
      <div className="flex flex-col gap-4">
        <div role="alert" className="flex flex-row gap-2 items-center">
          <CardsComponent />
        </div>

        <Timeline defaultValue={3} className="z-[999]">
          {timelineProps.map((item) => (
            <GenerateTimeline key={item.id} timeline={item} />
          ))}
        </Timeline>
      </div>
    );
  };

  const GenerateTimeline = ({
    timeline: item,
  }: {
    timeline: TimelineProps;
  }) => {
    const iconRef = useRef<ArrowRightIconHandle>(null);

    return (
      <TimelineItem
        key={item.id}
        step={item.id}
        className="group-data-[orientation=vertical]/timeline:ms-10"
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        <TimelineHeader>
          <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 " />
          <TimelineTitle className="mt-0.5 text-2xl font-extrabold text-primary">
            {item.title}
          </TimelineTitle>
          <TimelineIndicator className="bg-yellow-500 group-data-completed/timeline-item:bg-yellow-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
            <item.icon size={18} ref={iconRef} />
          </TimelineIndicator>
        </TimelineHeader>
        <TimelineContent className="text-xl text-neutral-800">
          {item.description}
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <AnimatePresence>
      <section className="flex flex-row gap-4 ">
        {variant === "leftToRight" && (
          <>
            <Left />
            <Right />
          </>
        )}
        {variant === "rightToLeft" && (
          <>
            <Right />
            <Left />
          </>
        )}
      </section>
    </AnimatePresence>
  );
}
