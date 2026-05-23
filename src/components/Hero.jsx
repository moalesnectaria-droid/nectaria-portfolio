// src/components/Hero.jsx

import avatar from "../assets/avatar.jpeg"
import { motion } from "framer-motion"

function Hero() {
  return (

    <section
      className="min-h-screen flex items-center justify-center bg-black px-10 pt-40 relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-700/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-[180px] rounded-full"></div>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-purple-400 text-2xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">

            Maria
            <br />
            Nectaria

          </h1>

          <h2 className="text-4xl text-gray-300 mb-8 leading-snug">

            Computer Science Student
            <br />
            at the University of Westminster

          </h2>

          <p className="text-gray-400 text-xl leading-10 mb-12 max-w-2xl">

            Passionate about Full Stack Development,
            AI/ML, databases and building meaningful projects.
            I take small but consistent steps because
            consistency beats motivation. 🚀

          </p>

          {/* BUTTONS */}

          <div className="flex gap-6">

            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] duration-300"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="border border-purple-500 px-10 py-5 rounded-full text-xl hover:bg-purple-500/10 duration-300"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >

          <div className="relative">

            {/* Avatar Glow */}

            <div className="absolute inset-0 bg-purple-500 blur-[100px] opacity-40 rounded-full"></div>

            {/* Avatar */}

            <img
              src={avatar}
              alt="avatar"
              className="relative w-[450px] rounded-full border-4 border-purple-500 shadow-[0_0_80px_rgba(168,85,247,0.7)] hover:scale-105 duration-500"
            />

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Hero