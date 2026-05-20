import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

function Home() {
  return (

    <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Navbar />
      {/* glow in the background */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700 blur-[120px] opacity-30"></div>

      <motion.div
        initial={{opacity:0,y:60}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}

        className="z-10 text-center"
      >

        <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">

          ArcanaStay 🌙

        </h1>

        <p className="mt-4 text-gray-400">

          Discover mystical places around the world

        </p>

        <button className="mt-8 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700">

          Explore Magic ✨

        </button>

      </motion.div>

    </div>
  )
}

export default Home