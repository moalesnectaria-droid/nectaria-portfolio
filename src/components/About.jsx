function About() {
  return (

    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-purple-950/20 px-10 py-32"
    >

      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <h1 className="text-7xl font-black mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">

          About Me

        </h1>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-10 hover:-translate-y-2 duration-300">

            <h2 className="text-3xl font-bold text-purple-400 mb-8">
              🌙 My Journey
            </h2>

            <p className="text-gray-300 text-xl leading-10">

              I'm Maria Nectaria, a Computer Science student at the
              University of Westminster currently completing my
              Level 5 journey.

            </p>

            <p className="text-gray-400 text-lg leading-9 mt-8">

              I enjoy building projects, learning independently,
              solving problems and constantly improving my skills
              through practical work, volunteering and research.

            </p>

          </div>

          {/* Right Card */}

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-10 hover:-translate-y-2 duration-300">

            <h2 className="text-3xl font-bold text-purple-400 mb-8">
              🚀 What Drives Me
            </h2>

            <p className="text-gray-300 text-lg leading-10">

              I'm passionate about Full Stack Development,
              AI/ML, databases and building meaningful applications.

            </p>

            <p className="text-gray-400 text-lg leading-9 mt-8">

              My goal is to grow into a software engineer role
              where I can contribute, learn continuously and build
              impactful technology while maintaining balance,
              flexibility and long-term growth.

            </p>

            {/* Mini Cards */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-black/40 rounded-2xl p-4">
                💻 Full Stack
              </div>

              <div className="bg-black/40 rounded-2xl p-4">
                🤖 AI / ML
              </div>

              <div className="bg-black/40 rounded-2xl p-4">
                🗄 Databases
              </div>

              <div className="bg-black/40 rounded-2xl p-4">
                🚀 Problem Solving
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About