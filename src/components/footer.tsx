import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer className="flex flex-col w-full gap-12 p-6 items-center justify-between bg-zinc-900 py-6">
      <p className="text-center text-9xl font-anton text-slate-50 font-semibold"><a href="https://github.com/carlospinellowork" target="_blank" rel="noreferrer">CARLOS EDUARDO</a></p>
      <div className="flex w-full justify-between gap-4">
      <p className="text-4xl text-zinc-50 font-bebas">© {new Date().getFullYear()}</p>
      <Link to="hero" smooth duration={500} className="text-4xl text-zinc-50 font-bebas hover:underline underline-offset-4 cursor-pointer">
        Voltar ao topo
      </Link>
      </div>
    </footer>
  )
}

export default Footer