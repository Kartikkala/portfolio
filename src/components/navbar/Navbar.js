import { MdOutlineFileDownload } from "react-icons/md";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar() {
    const nav = useRef(null)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const navbar = nav.current;
        
        ScrollTrigger.create({
            start: "top top",
            end: 999,
            scrub : 3,
            onUpdate: (self) => {
              if (self.direction === 1) {
                gsap.to(navbar, { y: -160, duration: 2.9, ease: "circ.out" });
              } else {
                gsap.to(navbar, { y: 0, duration: 2.9, ease: "circ.out" });
              }
            }
        });
        

    }, [])


    return (
        <div className="flex fixed z-50 p-4 md:p-10 pointer-events-none w-full" ref={nav}>
            {/* Top Left: Name & Year */}
            <div className="absolute top-4 left-4 md:top-10 md:left-10 z-10 flex flex-col">
                <h1 className="font-oswald text-4xl md:text-6xl font-bold tracking-tighter text-text-main leading-none uppercase">
                    Kartik Kala
                </h1>
                <p className="font-playfair italic text-xl text-text-muted mt-1">
                    Portfolio'25
                </p>
            </div>
            {/* Navigation Links - Aligned to Top Right */}
            <nav className="absolute right-4 md:right-10 pointer-events-auto flex gap-8 items-center font-oswald tracking-wider text-sm md:text-base">
                <a href="#about" className="text-text-muted hover:text-accent transition-colors uppercase">About</a>
                <a href="#projects" className="text-text-muted hover:text-accent transition-colors uppercase">Projects</a>
                <a href="#recognition" className="text-text-muted hover:text-accent transition-colors uppercase">Recognition</a>
                <a href="#contact" className="text-text-muted hover:text-accent transition-colors uppercase">Contact</a>

                <a href="/resume.pdf" download className="border border-text-muted px-4 py-2 hover:bg-accent hover:text-surface hover:border-accent transition-all duration-300 uppercase">
                    Resume
                </a>
            </nav>
        </div>
    );
}
