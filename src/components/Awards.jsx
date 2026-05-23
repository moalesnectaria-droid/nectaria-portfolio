function Awards() {
  return (

    <section
      id="awards"
      className="min-h-screen bg-black px-10 py-32 scroll-mt-32"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-black mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Awards & Certifications
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              🏆 Westminster Award — Bronze
            </h2>

            <p className="text-gray-400 text-lg">
              Awarded for extracurricular engagement,
              volunteering and personal development.
            </p>
          </div>

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              🥈 Westminster Award — Silver
            </h2>

            <p className="text-gray-400 text-lg">
              Recognition for continued involvement,
              growth and impactful participation.
            </p>
          </div>

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              🐍 Python Certificate
            </h2>

            <p className="text-gray-400 text-lg">
              Santander Open Academy — Python fundamentals
              and programming concepts.
            </p>
          </div>

          <div className="bg-purple-950/20 border border-purple-900 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              🎨 Motion Design with Figma
            </h2>

            <p className="text-gray-400 text-lg">
              UX/UI, motion graphics and interface design.
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}

export default Awards