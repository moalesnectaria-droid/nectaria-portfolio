function Contact() {
  return (

    <section
      id="contact"
      className="min-h-screen bg-black px-10 py-32 scroll-mt-32"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-7xl font-black mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Contact
        </h1>

        <p className="text-gray-400 text-2xl leading-10 mb-16">

          Open to internships, placement opportunities,
          collaborations and software engineering roles.

        </p>

        <div className="flex flex-wrap justify-center gap-8">

          <a
            href="https://github.com/moalesnectaria-droid"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-500 duration-300 px-10 py-5 rounded-full text-xl"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maria-nectaria-nistor/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 duration-300 px-10 py-5 rounded-full text-xl"
          >
            LinkedIn
          </a>

          <a
            href="mailto:moalesnectaria@gmail.com"
            className="border border-purple-500 hover:bg-purple-500/10 duration-300 px-10 py-5 rounded-full text-xl"
          >
            Email Me
          </a>

        </div>

      </div>

    </section>

  )
}

export default Contact