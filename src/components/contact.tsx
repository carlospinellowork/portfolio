import { Github, Instagram, Linkedin } from "lucide-react"
import ContactImg from '../assets/contactImg.jpeg';

const Contact = () => {
  return (
    <div className='flex flex-col items-center flex-1 py-24 bg-zinc-900 contact'>
      <h4 className='mb-12 font-bold font-bebas text-7xl md:text-8xl xl:text-9xl text-slate-50'>Vamos trabalhar juntos</h4>
      <h2 className='px-12 my-6 text-3xl text-center font-bebas text-slate-50'>Envie uma mensagem para o meu e-mail: <br /><br /> <a href="mailto:carlos.pinello@outlook.com" className="text-5xl text-zinc-50 hover:underline hover:underline-offset-4">carlos.pinello@outlook.com</a></h2>
      <h4 className='mb-12 text-3xl font-bold font-bebas text-slate-50'>Vamos trabalhar juntos</h4>
      <img src={ContactImg} className="mt-auto w-1/2 h-[600px] object-cover" />
      <h2 className='px-12 my-6 text-3xl text-center font-bebas text-slate-50'>Me siga nas redes sociais</h2>

      <div className='flex items-center justify-center gap-4'>
        <a href="https://github.com/carlospinellowork" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Github /></a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-9ba041156/" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Linkedin /></a>
        <a href="https://www.instagram.com/dududucadu/" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Instagram /></a>
      </div>

    </div>
  )
}

export default Contact