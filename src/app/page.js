"use client";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Tools from "../components/tools/Tools"
import Projects from "@/components/projects/Projects";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ProjectDetailsOverlay from "@/components/projects/project_details/ProjectDetailsOverlay";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function Home() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(()=>{
    if(window.innerWidth <= 1280)
      return;
    gsap.registerPlugin(ScrollSmoother);
    const mainPage = mainRef.current;

    const smoother = ScrollSmoother.create({
      wrapper : mainPage,
      content : contentRef.current
    })


  }, [])
  return (
    <div ref={mainRef} id="main-scroll-container" className="min-h-dvh bg-background font-sans relative text-text-muted overflow-x-hidden w-full">

      <ProjectDetailsOverlay/>
      <Navbar />

      {/* Main parent container containing sections */}
      <div ref={contentRef} className="flex flex-col w-full">

        <section className="min-h-dvh flex flex-col justify-center">
          <Hero />
        </section>
        
        <section id="tools_technologies" className="min-h-dvh justify-center flex">
          <Tools/>
        </section>


        <section id="projects" className="min-h-dvh justify-center">
          <Projects/>
        </section>

        <section id="certifications">

        </section>
        
        <section id="stats">

        </section>


      </div>
    </div>
  );
}
