import Navbar from "../components/Navbar"
import About from "../sections/About"
import Projects from "../sections/Projects"

function Home() {
  return (
    <div className="h-screen bg-black text-white">

      <Navbar />
      <About />
      <Projects />

      <div className="flex flex-col items-center justify-center h-full">

        <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Maria-Nectaria's Portfolio
        </h1>

        <p className="mt-4 text-gray-400">
          Computer Science student documenting my journey through code 🚀
        </p>

        <button className="mt-8 px-8 py-4 rounded-full bg-purple-600">
          Explore My Work ✨
        </button>

      </div>

    </div>
  )
}

export default Home