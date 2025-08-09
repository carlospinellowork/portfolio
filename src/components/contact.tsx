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
    <section
      className="relative w-full px-4 py-16 overflow-hidden sm:px-6 sm:py-20 md:py-24 bg-zinc-900"
      id="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2
            className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-slate-50"
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
          <div className="w-16 h-1 mx-auto mb-6 sm:w-24 sm:mb-8 bg-gradient-to-r from-gray-400 to-gray-200" />
          <motion.p
            variants={itemVariants}
            className="max-w-2xl px-2 mx-auto text-base leading-relaxed sm:text-lg md:text-xl text-slate-300"
          >
            Tem um projeto, ideia ou vaga? Envie uma mensagem e vamos conversar
            sobre como posso ajudar a transformar sua visão em realidade.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20">
                    <Mail className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      Email Principal
                    </h3>
                    <p className="text-sm text-slate-400 sm:text-base">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>
                <motion.a
                  href="mailto:carlos.pinello@outlook.com"
                  className="inline-flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-full sm:px-6 sm:text-lg text-zinc-900 bg-slate-50 hover:bg-gray-200"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  carlos.pinello@outlook.com
                  <ArrowRight className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100" />
                </motion.a>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                Outras formas de contato
              </h3>
              <motion.a
                href="https://api.whatsapp.com/send?phone=5511957944402&text=Ol%C3%A1%2C%20estou%20interessado%20em%20conversar%20sobre%20um%20projeto%20ou%20vaga."
                target="_blank"
                rel="noreferrer"
                className="group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20">
                  <MessageCircle className="w-5 h-5 text-gray-300" />
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-sm text-slate-400">Resposta rápida</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Conecte-se comigo
              </h3>
              <p className="mb-8 text-sm text-slate-400 sm:text-base">
                Acompanhe meu trabalho e conecte-se nas redes sociais para ficar
                por dentro dos meus projetos e novidades.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
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
                    <Card className="transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20">
                            <IconComponent className="w-6 h-6 text-slate-50" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-semibold text-white sm:text-lg">
                              {social.name}
                            </h4>
                            <p className="text-sm text-slate-400">
                              {social.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            <motion.div className="pt-6 text-center border-t sm:pt-8 lg:text-left border-white/10">
              <p className="mb-4 text-sm text-slate-400 sm:text-base">
                Pronto para começar um projeto?
              </p>
              <Button
                size="lg"
                className="text-sm font-semibold text-white border bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border-gray-500/20 sm:text-base"
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
      </motion.div>
    </section>
  );
};

export default Contact;
