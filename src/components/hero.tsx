import { useRef } from "react";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { ArrowDown, ChevronDown, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import AvatarPhoto from "../assets/avatarPhoto.jpeg";
import DotPattern from "./magicui/dot-pattern";
import WordRotate from "./magicui/word-rotate";

const Hero = () => {
  const ref = useRef(null);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/carlospinellowork",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/carlos-eduardo",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:carlos.pinello@outlook.com", label: "Email" },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="hero"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-zinc-900"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bg-gray-600 rounded-full top-1/4 left-1/4 w-96 h-96 blur-3xl" />
        <div className="absolute bg-gray-500 rounded-full bottom-1/4 right-1/4 w-96 h-96 blur-3xl" />
      </div>

      <DotPattern
        className={cn(
          "absolute inset-0 z-10 opacity-30",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-24 p-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <img
              src={AvatarPhoto}
              alt="Carlos Eduardo"
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>

          <WordRotate
            className="uppercase text-6xl text-center md:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-slate-50 mb-4"
            words={["Carlos Eduardo", "22 anos", "Brasileiro"]}
          />

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-slate-400"
          >
            Desenvolvedor Frontend apaixonado por criar experiências digitais
            incríveis
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <WordRotate
            words={["Dev Frontend", "React Developer", "UI/UX Enthusiast"]}
            className="uppercase text-4xl text-center md:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 mb-12 sm:flex-row"
        >
          <Link to="about" smooth duration={500}>
            <Button
              size="lg"
              className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 hover:scale-105"
            >
              Sobre Mim
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:text-white hover:bg-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <IconComponent className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium text-gray-400">
              Scroll para explorar
            </span>
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute w-4 h-4 bg-gray-500 rounded-full top-1/4 right-1/4 opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute w-6 h-6 bg-gray-400 rounded-full bottom-1/3 left-1/3 opacity-20"
      />
    </motion.section>
  );
};

export default Hero;
