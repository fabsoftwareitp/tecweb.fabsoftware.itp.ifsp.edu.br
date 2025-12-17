import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Text({
  text,
  className,
  spanClassName,
}: {
  text: string;
  className?: string;
  spanClassName?: string;
}) {
  return (
    <motion.p
      className={cn(
        "font-abril-fatface italic font-extralight text-primary",
        className,
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={cn("font-imperial-script text-9xl", spanClassName)}>
        {text.charAt(0)}
      </span>
      {text.slice(1)}
    </motion.p>
  );
}
