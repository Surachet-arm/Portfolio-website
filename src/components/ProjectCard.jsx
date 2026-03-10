// src/components/ProjectCard.jsx
function ProjectCard({ title, description, image, demo, github }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
          {title}
        </h3>

        <p className="text-gray-300 mb-6">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={demo}
            target="_blank"
            className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            ชมโปรเจค
          </a>

          <a
            href={github}
            target="_blank"
            className="border border-indigo-500 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;