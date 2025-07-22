import { motion } from "framer-motion";

import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/carlospinellowork",
      color: "hover:text-gray-300",
      description: "Veja meus projetos",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/carlos-eduardo-9ba041156/",
      color: "hover:text-gray-300",
      description: "Conecte-se comigo",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/dududucadu/",
      color: "hover:text-gray-300",
      description: "Acompanhe meu dia a dia",
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
    <section className="relative w-full px-8 py-24 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bg-gray-600 rounded-full top-1/4 left-1/4 w-96 h-96 blur-3xl" />
        <div className="absolute bg-gray-500 rounded-full bottom-1/4 right-1/4 w-96 h-96 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.1),transparent_70%)]" />

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <motion.h2
            className="mb-6 text-5xl font-bold md:text-7xl text-slate-50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Vamos trabalhar
            <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
              juntos?
            </motion.span>
          </motion.h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-gray-400 to-gray-200" />
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-slate-300"
          >
            Tem um projeto, ideia ou vaga? Envie uma mensagem e vamos conversar
            sobre como posso ajudar a transformar sua visão em realidade.
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.0, y: -2 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20">
                      <Mail className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Email Principal
                      </h3>
                      <p className="text-slate-400">Resposta em até 24h</p>
                    </div>
                  </div>
                  <motion.a
                    href="mailto:carlos.pinello@outlook.com"
                    className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-full text-zinc-900 bg-slate-50 hover:bg-gray-200 group-hover:scale-105"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                    carlos.pinello@outlook.com
                    <ArrowRight className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Outras formas de contato
              </h3>
              <div className="grid gap-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 transition-all border rounded-lg cursor-pointer bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <MessageCircle className="w-5 h-5 text-gray-300" />
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-sm text-slate-400">Resposta rápida</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="mb-6 text-3xl font-bold text-white">
                Conecte-se comigo
              </h3>
              <p className="mb-8 text-slate-400">
                Acompanhe meu trabalho e conecte-se nas redes sociais para ficar
                por dentro dos meus projetos e novidades.
              </p>
            </div>

            <div className="grid gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <Card className="transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 group-hover:border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 transition-all rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20 group-hover:from-gray-600/30 group-hover:to-gray-500/30">
                            <IconComponent
                              className={`w-6 h-6 text-slate-50 ${social.color} transition-colors`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-gray-300">
                              {social.name}
                            </h4>
                            <p className="text-sm text-slate-400">
                              {social.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 transition-all text-slate-400 group-hover:text-white group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="pt-8 text-center border-t lg:text-left border-white/10"
            >
              <p className="mb-4 text-slate-400">
                Pronto para começar um projeto?
              </p>
              <Button
                size="lg"
                className="font-semibold text-white border bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border-gray-500/20"
                onClick={() =>
                  window.open("mailto:carlos.pinello@outlook.com", "_blank")
                }
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-12 mt-20 text-center border-t border-white/10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-500/20">
              <Mail className="w-8 h-8 text-gray-300" />
            </div>
          </motion.div>
          <p className="text-lg text-slate-400">
            Geralmente respondo em{" "}
            <span className="font-semibold text-white">24 horas</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
