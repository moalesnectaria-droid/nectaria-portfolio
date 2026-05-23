function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-purple-900 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Maria Nectaria
          </h1>

          <p className="text-gray-400 text-lg mt-1">
            CS Student | Builder | Learner
          </p>

        </div>

        <div className="flex gap-10 text-xl text-gray-300">

          <a href="#about" className="hover:text-purple-400 duration-300">
            About
          </a>

          <a href="#education" className="hover:text-purple-400 duration-300">
            Education
          </a>

          <a href="#projects" className="hover:text-purple-400 duration-300">
            Projects
          </a>

          <a href="#awards" className="hover:text-purple-400 duration-300">
            Awards
          </a>

          <a href="#skills" className="hover:text-purple-400 duration-300">
            Skills
          </a>

          <a href="#contact" className="hover:text-purple-400 duration-300">
            Contact
          </a>

        </div>

      </div>

    </nav>

  )
}

export default Navbar