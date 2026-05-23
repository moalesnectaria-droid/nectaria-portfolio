function Skills() {
  return (

    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-black to-purple-950/20 px-10 py-32 scroll-mt-32"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-black mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Skills
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              💻 Development
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>Django</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              🤖 AI / Data
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>Machine Learning</li>
              <li>Google Colab</li>
              <li>Data Mining</li>
              <li>SQL</li>
              <li>Databases</li>
            </ul>
          </div>

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              🚀 Soft Skills
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>Problem Solving</li>
              <li>Research</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Communication</li>
            </ul>
          </div>

        </div>

      </div>

    </section>

  )
}

export default Skills