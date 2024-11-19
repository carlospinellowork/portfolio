import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Mouse } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-scroll";
import BGimg from "../assets/heroimg.jfif";
import DotPattern from "./magicui/dot-pattern";
import WordRotate from './magicui/word-rotate';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: "-100px"});

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <motion.section 
    variants={variants}
    initial="initial"
    animate={isInView && "animate"}
    ref={ref}
    className="flex flex-1 flex-col items-center bg-zinc-900 hero">
      <WordRotate 
        className="uppercase text-7xl text-center md:text-9xl xl:text-10xl font-bold font-anton tracking-[-0.02em] text-slate-50"
        words={["Carlos Eduardo", "22 anos", "Brasileiro"]}
      />

      <Link to="about" smooth duration={500} className="text-md sm:text-lg md:text-xl font-semibold font-koho hover:underline underline-offset-4 text-slate-50 py-6">
        SOBRE MIM
      </Link>
      <WordRotate 
        words={["Dev Front-end", "Analista de Sistemas", "Desenvolvedor Web"]}
        className="uppercase text-7xl text-center md:text-9xl xl:text-10xl font-bold font-anton tracking-[-0.02em] text-slate-50"
      />
      <div className="flex flex-col items-center mb-12">
      <Mouse className="text-zinc-600 animate-pulse mt-12 w-10 h-10" />
      <ArrowDown className="text-zinc-600 w-4 h-4 animate-pulse" />
      </div>
      <img src={BGimg} className="mt-auto w-full max-h-72 object-cover" />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_top,white,transparent)]",
        )}
      />
    </motion.section>
  );
}

export default Hero;
