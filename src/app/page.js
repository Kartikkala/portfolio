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
import Contact from "@/components/contact/Contact";
import Blogs from "@/components/blogs/Blogs";


export default function Home() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const parallaxWrapperRef = useRef(null);
  const parallaxBgRef = useRef(null);


  useEffect(()=>{
    
    gsap.registerPlugin(ScrollSmoother);
    const ctx = gsap.context(() => {
      if (window.innerWidth > 1280) {
        ScrollSmoother.create({
          wrapper: mainRef.current,
          content: contentRef.current,
          smooth: 1.2,
          effects: true,
        });
      }

      gsap.set(imgRef.current, {
        scale: 1.3,
      });

      gsap.to(imgRef.current, {
        scale: 1.2,
        duration: 0.6,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        trigger: parallaxWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: parallaxBgRef.current,
        pinSpacing: false,
      });

      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxWrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, mainRef);
    return () => ctx.revert()


  }, [])
  return (
    <div ref={mainRef} id="main-scroll-container" className="min-h-lvh bg-background font-sans relative text-text-muted overflow-x-hidden w-full">

      <ProjectDetailsOverlay/>
      <Navbar />

      {/* Main parent container containing sections */}
      <div ref={contentRef} className="flex flex-col w-full">

        <section className="min-h-[200lvh] flex flex-col justify-center relative" ref={parallaxWrapperRef}>
          {/* Center: Silhouette / Image */}
            <div className="absolute z-0 top-0 left-0 max-h-[100lvh] overflow-hidden" ref={parallaxBgRef}>
                <img
                    ref={imgRef}
                    src="/bg-bw.webp"
                    alt="Profile Silhouette"
                    className="w-[140vw] h-[140lvh] object-cover opacity-80 scale-[1.3] -translate-y-[20%]"
                    loading="lazy"
                />
            </div>
          <Hero />
          <About  imgPath={"/bg.webp"}/>
        </section>
        

        <section id="tools_technologies" className="min-h-lvh justify-center flex">
          <Tools/>
        </section>


        <section id="projects" className="min-h-lvh justify-center">
          <Projects/>
        </section>

        {/* <section id="blogs" className="min-h-lvh relative">
          <Blogs/>
        </section> */}
        
        <section id="contact" className="min-h-lvh relative">
          <Contact/>
        </section>


      </div>
    </div>
  );
}
