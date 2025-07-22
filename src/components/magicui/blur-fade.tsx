import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);

  const inViewResult = useInView(ref, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: -yOffset,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variant || defaultVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
