// src/pages/About.jsx
import profile from "../assets/me.png";

function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 pt-20">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-100 h-120 object-cover rounded-full border-4 border-indigo-400 shadow-lg"
          />
        </div>

        {/* About Text */}
        <div>

          <h2 className="text-5xl font-bold mb-6 text-indigo-400">
            About Me
          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed">
            Hello, my name is Surachet Prapasawwat. I am interested in
            technology and programming, especially web development. I enjoy
            learning how to write code and solving problems through
            programming.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;