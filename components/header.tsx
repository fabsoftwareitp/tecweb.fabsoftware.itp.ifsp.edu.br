"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Container from "./container";
import { BookTextIcon } from "./ui/book-text";
import { CalendarDaysIcon } from "./ui/calendar-days";
import { CircleHelpIcon } from "./ui/circle-help";
import { CogIcon } from "./ui/cog";
import { CpuIcon } from "./ui/cpu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { MenuIcon } from "lucide-react";

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
    <Container>
      <motion.header
        initial={{ y: -50 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full z-50 lg:mt-4 items-center justify-center flex fixed top-0 left-0 pointer-events-none"
      >
        <div className="w-full lg:max-w-[90vw]    z-50  border-2 lg:rounded-2xl pointer-events-auto bg-white border-primary items-center justify-between flex lg:flex-row md:flex-col flex-row px-4">
          <Link href="#" className="w-auto h-full">
            <Image src="/ifsp/ifsp1.png" alt="IFSP" width={150} height={150} />
          </Link>

          <div className="w-fit md:flex hidden flex-row gap-4 flex-wrap ">
            <NavigationMenu className="flex items-center gap-1">
              <NavigationMenuList className="w-fit">
                <NavigationMenuItem className="w-fit">
                  <NavigationMenuTrigger className="flex items-center gap-1 w-fit">
                    Projetos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200  data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CircleHelpIcon} href="#">
                  Sobre
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200  data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={UserIcon} href="#">
                  Docentes
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200  data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={BookTextIcon} href="#">
                  Disciplinas
                </Button>
              </NavigationMenuLink>
              <Separator
                orientation="vertical"
                className="w-5 bg-neutral-200  data-[orientation=vertical]:h-5"
              />
              <NavigationMenuLink asChild>
                <Button icon={CogIcon} href="#">
                  Estrutura
                </Button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Button icon={CalendarDaysIcon} href="#">
                  Monitoria
                </Button>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">Menu</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </Container>
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
