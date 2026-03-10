import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-indigo-400">Surachet</span>
        </h1>

        <p className="text-3xl text-gray-300 mb-8">
          Frontend Developer | React & Tailwind Specialist
        </p>

        <div className="flex justify-center space-x-4">

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Resume
          </a>

          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            ผลงาน
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;