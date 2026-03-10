// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "../components/Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      

    </div>
  );
}

export default Home;