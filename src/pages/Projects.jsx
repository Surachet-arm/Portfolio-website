// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import PicEcom from "../assets/ecom.png"
import Picbooking from "../assets/booking.png"
import PicTask from "../assets/task.png"
import Picport from "../assets/port.png"

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "React + tailwindCSS + Express + NodeJs + MongoDB",
      image: PicEcom,
      demo: "https://ecommerce-website-khaki-nu.vercel.app/",
      github: "https://github.com/Surachet-arm/ecommerce-website"
    },
    {
      title: "Booking Website",
      description: "React + tailwindCSS + Express + NodeJs + MongoDB",
      image: Picbooking,
      demo: "https://booking-system-seven-wine.vercel.app/",
      github: "https://github.com/Surachet-arm/booking-system"
    },
    {
      title: "Task-Manager System Website",
      description: "React + tailwindCSS + Express + NodeJs + MongoDB",
      image: PicTask,
      demo: "https://task-management-system-hazel-one.vercel.app",
      github: "https://github.com/Surachet-arm/task-management-system"
    },
    // {
    //   title: "Dashboard Admin",
    //   description: "React + tailwindCSS + Express + NodeJs + MongoDB",
    //   image: "/projects/dashboard.png",
    //   demo: "https://demo.com",
    //   github: "https://github.com/project2"
    // },
    {
      title: "Portfolio Website",
      description: "React + TailwindCSS + EmailJs",
      image: Picport,
      demo: "https://portfolio-website-five-sandy-15.vercel.app/",
      github: "https://github.com/Surachet-arm/Portfolio-website"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-800 text-white pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demo={project.demo}
              github={project.github}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;