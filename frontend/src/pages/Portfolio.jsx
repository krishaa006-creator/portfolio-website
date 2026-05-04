import React, { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import ProjectModal from "../components/portfolio/ProjectModal";
import Experience from "../components/portfolio/Experience";
import Community from "../components/portfolio/Community";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import Marquee from "../components/portfolio/Marquee";
import DraggableStickers from "../components/portfolio/DraggableStickers";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#F7F2E7] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects onOpen={setActiveProject} />
        <Experience />
        <Community />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <DraggableStickers />
    </div>
  );
}
