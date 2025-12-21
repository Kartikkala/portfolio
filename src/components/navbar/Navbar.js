import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import RisingAnimation from "../utils/RisingAnimation";
import AnimatedButton from "../utils/AnimatedButton";

export default function Navbar() {
    const nav = useRef(null);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Path to your file in /public folder
        link.download = "Kartik_Kala_Resume.pdf"; // The name the user will see
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const navbar = nav.current;
        let isHidden = false;
        gsap.to( navbar, {
            y : 0,
            duration : 1.9,
            ease : "circ.out"
        })
        ScrollTrigger.create({
            start: "top top",
            end: 999999,
            scrub : 3,
            onUpdate: (self) => {
              if (self.direction === 1 && !isHidden) {
                gsap.to(navbar, { y: -160, duration: 1.9, ease: "circ.out", overwrite : true });
                isHidden = true;
                
              } else if(self.direction == -1 && isHidden) {
                gsap.to(navbar, { y: 0, duration: 1.9, ease: "circ.out", overwrite : true });
                isHidden = false;
              }
            }
        });
        

    }, [])


    return (
        <div className="flex fixed z-15 p-4 md:p-10 pointer-events-none w-full -translate-y-40" ref={nav}>
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
                <a href="#about" className="text-text-muted hover:text-accent transition-colors uppercase hidden md:block"><RisingAnimation text={"ABOUT"}/></a>
                <a href="#projects" className="text-text-muted hover:text-accent transition-colors uppercase hidden md:block"><RisingAnimation text={"PROJECTS"}/></a>
                <a href="#recognition" className="text-text-muted hover:text-accent transition-colors uppercase hidden md:block"><RisingAnimation text={"RECOGNITIONS"}/></a>
                <a href="#contact" className="text-text-muted hover:text-accent transition-colors uppercase hidden md:block"><RisingAnimation text={"CONTACT"}/></a>

                <AnimatedButton buttonText={"DOWNLOAD RESUME"} onClickFn={handleDownload}/>
            </nav>
        </div>
    );
}
