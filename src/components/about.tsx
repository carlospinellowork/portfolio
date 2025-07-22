import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import {
  Award,
  Calendar,
  Code,
  Coffee,
  Heart,
  MapPin,
  Target,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MarqueeDemo } from "./marquee";

import PhotoPerfil from "../assets/perfilphoto.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const stats = [
    {
      icon: Calendar,
      label: "Anos de Experiência",
      value: "2+",
      color: "text-gray-300",
    },
    {
      icon: Code,
      label: "Projetos Concluídos",
      value: "15+",
      color: "text-gray-300",
    },
    {
      icon: Coffee,
      label: "Cafés Consumidos",
      value: "∞",
      color: "text-gray-300",
    },
    { icon: Zap, label: "Tecnologias", value: "10+", color: "text-gray-300" },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Foco em Performance",
      description: "Otimização e código eficiente em cada projeto",
    },
    {
      icon: Heart,
      title: "Atenção aos Detalhes",
      description: "Cuidado especial com UX/UI e acessibilidade",
    },
    {
      icon: Award,
      title: "Código Limpo",
      description: "Práticas modernas e arquitetura sustentável",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="relative px-6 py-24 overflow-hidden bg-zinc-900"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bg-gray-600 rounded-full top-1/3 left-1/4 w-72 h-72 blur-3xl" />
        <div className="absolute bg-gray-500 rounded-full bottom-1/3 right-1/4 w-72 h-72 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="mb-20 text-center">
          <motion.h1
            className="mb-6 text-6xl font-bold md:text-7xl text-slate-50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sobre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
              Carlos Eduardo
            </span>
          </motion.h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-gray-400 to-gray-200" />
        </motion.div>

        <div className="grid items-center gap-16 mb-20 lg:grid-cols-2">
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="relative mx-auto lg:mx-0 w-fit"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={PhotoPerfil}
                  alt="Carlos Eduardo"
                  className="w-[280px] h-[420px] object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4"
              >
                <Badge className="px-4 py-2 text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-gray-700 to-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  @dududucadu
                </Badge>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10">
                      <CardContent className="p-4 text-center">
                        <IconComponent
                          className={`w-6 h-6 ${stat.color} mx-auto mb-2`}
                        />
                        <div className="mb-1 text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.p
                className="text-xl leading-relaxed text-slate-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Olá! Sou um desenvolvedor frontend com{" "}
                <span className="font-semibold text-white">
                  2+ anos de experiência
                </span>
                , apaixonado por criar interfaces funcionais e modernas. Atuo
                com HTML, CSS, JavaScript e frameworks como{" "}
                <span className="font-semibold text-white">
                  React, Vue, Angular e Next.js
                </span>
                .
              </motion.p>

              <motion.p
                className="text-xl leading-relaxed text-slate-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Me destaco pela atenção aos detalhes, foco em performance e
                responsabilidade com prazos. Acredito em código limpo, acessível
                e sustentável.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-gray-300 border-gray-600"
              >
                💻 Frontend Developer
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-gray-300 border-gray-600"
              >
                🚀 React Specialist
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 transition-all duration-300 border rounded-lg bg-white/5 border-white/10 hover:bg-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20">
                      <IconComponent className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.h2
            className="mb-12 text-3xl font-bold md:text-4xl text-slate-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tecnologias e Frameworks
            <span className="block mt-2 text-lg font-normal text-slate-400">
              que já trabalhei
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MarqueeDemo />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-12 mt-20 text-center border-t border-white/10"
        >
          <motion.p
            className="mb-6 text-lg text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interessado em trabalhar comigo?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Vamos conversar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
