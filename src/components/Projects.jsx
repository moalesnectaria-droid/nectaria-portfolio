import { motion } from "framer-motion"

function Projects() {
  return (

    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-purple-950/20 px-10 py-32 scroll-mt-32 relative overflow-hidden"
    >

      {/* Glow */}

      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-purple-700/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}

        <h1 className="text-7xl font-black mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">

          Projects

        </h1>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300"
          >

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              🏫 Smart Campus REST API
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              RESTful API built using JAX-RS
              for smart campus management,
              handling rooms, sensors and readings.

            </p>

            {/* Tech */}

            <div className="flex flex-wrap gap-3 mb-8">

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Java
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                REST API
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Backend
              </span>

            </div>

            {/* Buttons */}

            <div className="flex gap-4">

              <a
                href="https://github.com/moalesnectaria-droid/w1994214"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-500 duration-300 px-6 py-3 rounded-full"
              >
                GitHub
              </a>

            </div>

          </motion.div>

          {/* PROJECT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300"
          >

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              🌦 Weather App
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              Real-time weather application
              using APIs, dynamic rendering
              and frontend development.

            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              <span className="bg-black/40 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                API
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Frontend
              </span>

            </div>

            <div className="flex gap-4">

              <a
                href="https://github.com/moalesnectaria-droid/wather_app_in_real_time"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-500 duration-300 px-6 py-3 rounded-full"
              >
                GitHub
              </a>

            </div>

          </motion.div>

          {/* PROJECT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300"
          >

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              🤖 ML & Data Mining Labs
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              Google Colab notebooks exploring
              datasets, machine learning logic
              and AI concepts.

            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Python
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                ML
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Colab
              </span>

            </div>

            <div className="flex gap-4">

              <a
                href="https://drive.google.com/drive/folders/1DCSAX7q31EquWb7Ad4JnvsDZrvA-BGvb?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-500 duration-300 px-6 py-3 rounded-full"
              >
                GitHub
              </a>

            </div>

          </motion.div>

          {/* PROJECT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300"
          >

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              💻 Academic Portfolio Repository
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              Collection of coursework,
              robotics, databases and software
              engineering projects.

            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              <span className="bg-black/40 px-4 py-2 rounded-full">
                GitHub
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                OOP
              </span>

              <span className="bg-black/40 px-4 py-2 rounded-full">
                Databases
              </span>

            </div>

            <div className="flex gap-4">

              <a
                href="https://github.com/moalesnectaria-droid/nectaria-portfolio"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-500 duration-300 px-6 py-3 rounded-full"
              >
                GitHub
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default Projects