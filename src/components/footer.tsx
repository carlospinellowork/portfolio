"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react"
import { Link } from "react-scroll"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/carlospinellowork",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/carlos-eduardo",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:carlos@exemplo.com",
      color: "hover:text-green-400",
    },
  ]

  const quickLinks = [
    { name: "Início", to: "hero" },
    { name: "Sobre", to: "about" },
    { name: "Projetos", to: "projects" },
    { name: "Contato", to: "contact" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-zinc-900 border-t border-zinc-800/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">{"<Carlos Eduardo />"}</h3>
            <p className="text-zinc-400 leading-relaxed">
              Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis e interfaces modernas.
            </p>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>e muito</span>
              <Coffee className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Navegação</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer inline-flex items-center group"
                  >
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                    <motion.span initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }} className="ml-1">
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Conecte-se</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zinc-400 ${social.color} transition-colors inline-flex items-center gap-3 group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="group-hover:underline underline-offset-4">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                to="hero"
                smooth
                duration={500}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-500/20 to-gray-500/20 border border-gray-500/30 rounded-lg text-white hover:from-gray-500/30 hover:to-gray-500/30 transition-all cursor-pointer group"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Voltar ao topo</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <span>© {currentYear} Carlos Eduardo.</span>
              <span className="hidden md:inline">•</span>
              <span>Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1"
              >
                <Code className="w-4 h-4" />
                <span>Desenvolvido com Next.js</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
      </div>
    </motion.footer>
  )
}

export default Footer
