// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900 text-white shadow z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-indigo-400">
          Portfolio
        </h1>

        <div className="space-x-6">

          <a href="#home" className="hover:text-indigo-400">
            Home
          </a>

          <a href="#about" className="hover:text-indigo-400">
            About
          </a>

          <a href="#projects" className="hover:text-indigo-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;