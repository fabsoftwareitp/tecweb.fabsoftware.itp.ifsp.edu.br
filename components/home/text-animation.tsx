import { motion } from "motion/react";

export default function TextAnimation() {
  return (
    <div className="absolute bottom-[30vh] text-white text-5xl font-abril-fatface italic max-w-[500px] text-center leading-[-50px]">
      <div className="flex flex-col items-center justify-center relative w-full leading-[-50px] ">
        <motion.p
          className=" h-[30px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-imperial-script text-9xl">T</span>
          ecnologia{" "}
        </motion.p>
        <motion.p
          className=" h-[55px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-3xl absolute right-[12%] top-[90px]">
            em
          </span>{" "}
        </motion.p>
        <motion.p
          className=" h-[40px] absolute bottom-[-40%]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-3xl">para</span>{" "}
        </motion.p>
        <div className="flex flex-row items-center justify-center relative w-full leading-[-50px] gap-4 ">
          <motion.p
            className=" h-[40px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="font-imperial-script text-8xl">S</span>istemas
          </motion.p>

          <motion.p
            className=" h-[40px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <span className="font-imperial-script text-8xl">I</span>nternet
          </motion.p>
        </div>
      </div>
    </div>
  );
}
