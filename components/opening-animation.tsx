import { motion } from "motion/react";

export default function OpeningAnimation() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999999999] overflow-hidden pointer-events-none">
      <motion.div
        className="w-screen h-screen fixed bg-white opacity-80 z-40 pointer-events-none "
        initial={{ opacity: 1, display: "block" }}
        animate={{ opacity: 0 }}
        onAnimationEnd={() => {
          document.body.style.display = "none";
        }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary-dark-200 z-50"
        initial={{
          right: "-1920px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary z-50"
        initial={{
          right: "-2200px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary-light-200 z-50"
        initial={{
          right: "-2500px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
}
