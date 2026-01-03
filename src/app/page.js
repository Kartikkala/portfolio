"use client";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Tools from "../components/tools/Tools"
import Projects from "@/components/projects/Projects";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectDetailsOverlay from "@/components/projects/project_details/ProjectDetailsOverlay";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from "@/components/about/About";


export default function Home() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const parallaxWrapperRef = useRef(null);
  const parallaxBgRef = useRef(null);


  useEffect(()=>{
    if(window.innerWidth <= 1280)
      return;
    gsap.registerPlugin(ScrollSmoother);
    gsap.to(imgRef.current, {
            scale : 1.2,
            duration : 0.6,
        })


    ScrollTrigger.create({
      trigger : parallaxWrapperRef.current,
      start : "top top",
      end : "bottom bottom",
      pin : parallaxBgRef.current,
      pinSpacing : false,
      scrub : true
    })
    gsap.to(imgRef.current, 
      {
        yPercent: 10, // Move UP by 20% of its height
        ease: "none",
        scrollTrigger: {
          trigger: parallaxWrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true // Link movement to scroll bar
        }
      }
    );

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

        <section className="min-h-[200dvh] flex flex-col justify-center relative" ref={parallaxWrapperRef}>
          {/* Center: Silhouette / Image */}
            <div className="absolute z-0 top-0 left-0 max-h-[100vh] overflow-hidden" ref={parallaxBgRef}>
                <img
                    ref={imgRef}
                    src="/bg-bw.jpg"
                    alt="Profile Silhouette"
                    className="w-[140vw] h-[140vh] object-cover opacity-80 scale-[1.3] -translate-y-[20%]"
                />
            </div>
          <Hero />
          <About imgPath={"/bg.jpg"}/>
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
