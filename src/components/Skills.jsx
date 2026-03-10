// src/components/Skills.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiMysql, SiDart } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={60} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={60} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={60} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={60} className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={60} className="text-sky-400" /> },

    { name: "Flutter", icon: <SiFlutter size={60} className="text-sky-400" /> },
    { name: "Dart", icon: <SiDart size={60} className="text-blue-400" /> },
    { name: "PHP", icon: <FaPhp size={60} className="text-indigo-400" /> },
    { name: "MySQL", icon: <SiMysql size={60} className="text-blue-500" /> },
    { name: "Figma", icon: <FaFigma size={60} className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt size={60} className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub size={60} className="text-white" /> }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-800 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-indigo-400 mb-12">
          My Skills
        </h2>
        <p className="text-gray-400 mb-12">
        Technologies and tools I work with
    </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-110 hover:bg-slate-800 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>

              <p className="text-lg">{skill.name}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;