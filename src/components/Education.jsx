// src/components/Education.jsx

function Education() {
  return (

    <section
      id="education"
      className="min-h-screen bg-black px-10 py-32 relative overflow-hidden"
    >

      {/* Glow */}

      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}

        <h1 className="text-7xl font-black mb-24 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">

          Education Journey

        </h1>

        {/* Timeline */}

        <div className="relative border-l-4 border-purple-500 pl-12 space-y-20">

          {/* Westminster */}

          <div className="relative">

            <div className="absolute -left-[62px] top-2 w-8 h-8 bg-purple-500 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.8)]"></div>

            <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-10 hover:-translate-y-2 duration-300">

              <h2 className="text-4xl font-bold text-white mb-4">
                🎓 University of Westminster
              </h2>

              <p className="text-purple-400 text-xl mb-8">
                BSc Computer Science — Level 5 Completed
              </p>

              <p className="text-gray-300 text-lg leading-9">

                Studying software engineering, AI/ML,
                databases, backend systems and full stack
                development while building practical coursework
                and independent projects.

              </p>

            </div>

          </div>

          {/* Modules */}

          <div className="relative">

            <div className="absolute -left-[62px] top-2 w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.8)]"></div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  💻 Object Oriented Programming
                </h3>

                <p className="text-gray-400 leading-8">
                  Learned application structure,
                  classes, objects, inheritance,
                  logic and problem solving.
                </p>

              </div>

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  🗄 Database Systems
                </h3>

                <p className="text-gray-400 leading-8">
                  Worked with SQL, data relationships,
                  queries and backend data organisation.
                </p>

              </div>

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  🤖 Machine Learning & Data Mining
                </h3>

                <p className="text-gray-400 leading-8">
                  Explored AI concepts, datasets,
                  notebooks, algorithms and ML logic.
                </p>

              </div>

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  🌐 Client-Server Architectures
                </h3>

                <p className="text-gray-400 leading-8">
                  Learned APIs, backend communication,
                  networking concepts and system interaction.
                </p>

              </div>

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  ⚙ Software Development
                </h3>

                <p className="text-gray-400 leading-8">
                  Built applications, improved coding practices,
                  teamwork and software engineering principles.
                </p>

              </div>

              {/* Card */}

              <div className="bg-black/50 border border-purple-900 rounded-3xl p-8 hover:border-purple-500 duration-300">

                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  🤖 Robotics Principles
                </h3>

                <p className="text-gray-400 leading-8">
                  Explored robotics systems,
                  automation concepts and control logic.
                </p>

              </div>

            </div>

          </div>

          {/* Personal Growth */}

          <div className="relative">

            <div className="absolute -left-[62px] top-2 w-8 h-8 bg-pink-500 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.8)]"></div>

            <div className="bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-purple-900 rounded-3xl p-10">

              <h2 className="text-4xl font-bold text-white mb-6">
                🚀 Beyond University
              </h2>

              <p className="text-gray-300 text-lg leading-10">

                Alongside university, I actively learn independently
                through projects, GitHub repositories, online courses,
                volunteering, events and continuous research.

              </p>

              <p className="text-purple-400 text-xl mt-8 font-semibold">

                "Consistency beats motivation."

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Education