import { Link } from "react-scroll"

const Header = () => {
  return (
    <header className="h-14 py-8 flex items-center justify-center bg-zinc-900">
        <nav className="flex flex-1 items-center justify-center gap-4 sm:gap-6 text-slate-50">
          <Link to="projects" smooth duration={500} className="text-xl font-semibold font-koho hover:underline underline-offset-4">
            Projetos
          </Link>
          <Link to="contact" smooth duration={500} className="text-xl font-semibold font-koho hover:underline underline-offset-4">
            Contato
          </Link>
        </nav>
      </header>
  )
}

export default Header