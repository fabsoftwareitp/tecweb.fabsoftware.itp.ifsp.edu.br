import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowDownIcon } from "lucide-react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(
  () => import("@/components/effects/hero-background"),
  { ssr: false }
);

export default function TextAnimation() {
  return (
    <>
      <HeroBackground />
      <div className="absolute md:bottom-[30vh] text-primary md:text-white text-2xl md:text-5xl font-abril-fatface italic max-w-[320px] md:max-w-[500px] text-center leading-[-50px] flex flex-col items-center z-10">
        <div className="flex flex-col items-center justify-center relative w-full leading-[-50px]">
          <motion.p
            className="h-[20px] md:h-[30px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-imperial-script text-5xl md:text-9xl">T</span>
            ecnologia{" "}
          </motion.p>
          <motion.p
            className="h-[35px] md:h-[55px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-xl md:text-3xl absolute right-[8%] md:right-[12%] top-[50px] md:top-[90px]">
              em
            </span>{" "}
          </motion.p>
          <motion.p
            className="h-[40px] absolute bottom-[-40%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="text-xl md:text-3xl">para</span>{" "}
          </motion.p>
          <div className="flex flex-row items-center justify-center relative w-full leading-[-50px] gap-2 md:gap-4">
            <motion.p
              className="h-[40px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="font-imperial-script text-5xl md:text-8xl">S</span>istemas
            </motion.p>

            <motion.p
              className="h-[40px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <span className="font-imperial-script text-5xl md:text-8xl">I</span>nternet
            </motion.p>
          </div>
        </div>
        
        <motion.div
          className="mt-24 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link href="#sobre">
            <Button 
              variant="default" 
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all gap-2"
            >
              Descobrir mais
              <ArrowDownIcon className="w-5 h-5 animate-bounce" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
