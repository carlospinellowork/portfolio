import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Skin3d from '../assets/skin3D.jpeg';
import { MarqueeDemo } from './marquee';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

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
    <motion.div
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
      className="flex flex-col items-center justify-center flex-1 bg-zinc-900 about">
      <h1 className="mb-12 font-bold font-bebas text-7xl md:text-8xl xl:text-9xl text-slate-50">Mais sobre <br /> Carlos</h1>
      <img src={Skin3d} className="mt-auto w-[400px] h-[600px] object-cover" />
      <div className='flex w-[400px] items-center justify-between text-slate-50 mt-1'>
        <span>Dev Frontend</span>
        <span>@dududucadu</span>
      </div>
      <h3 className='w-1/2 px-12 mt-12 text-4xl text-center font-bebas text-slate-50'>
        Desenvolvedor frontend com 2 anos de experiência em criar interfaces atraentes e funcionais. Especialista em HTML, CSS, JavaScript, e frameworks como React, Vue.js, Angular.js e Next.js. Comprometido com a entrega de produtos de alta qualidade, sempre pontual e cumprindo prazos.
      </h3>
      <h1 className="mt-12 text-2xl font-bold font-bebas md:text-2xl xl:text-3xl text-slate-50">Tecnologias e Frameworks que já trabalhei</h1>
      <MarqueeDemo />
    </motion.div>
  )
}

export default About