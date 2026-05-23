function Footer() {
  return (

    <footer className="bg-black border-t border-purple-900 px-10 py-16">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-6">

          Maria Nectaria

        </h2>

        <p className="text-gray-400 text-xl leading-9 max-w-3xl mx-auto">

          I take small but consistent steps,
          because consistency beats motivation
          and progress matters more than perfection. 🚀

        </p>

        <div className="flex justify-center gap-8 mt-10 text-gray-400 text-lg">

          <a
            href="#about"
            className="hover:text-purple-400 duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-purple-400 duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 duration-300"
          >
            Contact
          </a>

        </div>

        <p className="text-gray-600 mt-12">

          Built with React, curiosity and consistency 🌙

        </p>

      </div>

    </footer>

  )
}

export default Footer