import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Awards from "./components/Awards"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Stars from "./components/Stars"


function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Education />

      <Projects />

      <Awards />

      <Skills />

      <Contact />

      <Footer />

      <Stars />

    </div>
  )
}

export default App