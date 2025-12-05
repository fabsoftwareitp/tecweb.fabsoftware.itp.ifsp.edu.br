"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CalendarDaysIcon } from "./ui/calendar-days";
import { CircleHelpIcon } from "./ui/circle-help";
import { CogIcon } from "./ui/cog";
import { CpuIcon } from "./ui/cpu";
import { GalleryHorizontalEndIcon } from "./ui/gallery-horizontal-end";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { UserIcon } from "./ui/user";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const previous = lastScrollY;
      const direction = latest > previous ? "down" : "up";
      const difference = Math.abs(latest - previous);

      if (difference > 10) {
        setIsVisible(direction === "up");
        setLastScrollY(latest);
      }
    });

    return unsubscribe;
  }, [scrollY, lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -50 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full z-50 items-center justify-center flex fixed top-0 left-0 pointer-events-none"
      >
        <div className="w-full z-50 border-b-2 pointer-events-auto bg-white border-primary items-center justify-between flex flex-row px-4 md:px-8">
          <Link href="/" className="w-auto h-full flex-shrink-0">
            <Image src="/ifsp/ifsp1.png" alt="IFSP" width={150} height={150} className="w-[100px] md:w-[150px] h-auto" />
          </Link>

          <div className="w-fit md:flex hidden flex-row gap-4 flex-wrap">
            <NavigationMenu className="flex items-center gap-1">
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CircleHelpIcon} href="/#sobre">
                  Sobre
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CpuIcon} href="/#projetos">
                  Projetos
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={UserIcon} href="/#docentes">
                  Docentes
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CogIcon} href="/#estrutura">
                  Estrutura
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CalendarDaysIcon} href="/#localizacao">
                  Localização
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200 data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={GalleryHorizontalEndIcon} href="/galeria">
                  Galeria
                </Button>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden text-sm font-medium px-3 py-2 border border-primary rounded-lg">Menu</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navegação</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2">
                <Link href="/#sobre" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Sobre</Link>
                <Link href="/#projetos" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Projetos</Link>
                <Link href="/#docentes" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Docentes</Link>
                <Link href="/#estrutura" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Estrutura</Link>
                <Link href="/#localizacao" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Localização</Link>
                <Link href="/galeria" onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-lg">Galeria</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
}

const Button = ({
  children,
  icon: Icon,
  href,
  disableAnimation,
}: React.ComponentProps<"button"> & {
  icon: any;
  href?: string;
  disableAnimation?: boolean;
}) => {
  const iconRef = useRef<any>(null);

  const generateButton = () => (
    <button
      type="button"
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
      className={cn("flex items-center gap-1 flex-row  rounded-md p-2", {
        "cursor-pointer": href,
        "hover:bg-primary/10": !disableAnimation,
      })}
    >
      <Icon ref={iconRef} size={20} className="text-primary" />
      {children}
    </button>
  );

  return !href ? (
    generateButton()
  ) : (
    <Link href={href} className="flex items-center gap-1 flex-row ">
      {generateButton()}
    </Link>
  );
};
