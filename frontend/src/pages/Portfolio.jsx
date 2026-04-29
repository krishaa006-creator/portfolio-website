import React, { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import ProjectModal from "../components/portfolio/ProjectModal";
import Resume from "../components/portfolio/Resume";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import Marquee from "../components/portfolio/Marquee";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects onOpen={setActiveProject} />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
