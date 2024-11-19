import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/Projects"

 const HomePage = () => {
  return (
   <div className="h-screen w-full bg-zinc-900">
    <Header />
    <Hero />
    <Projects />
    <About />
    <Contact />
    <Footer />
   </div>
  )
}

export default HomePage