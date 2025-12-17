import ProjectButton from "./ProjectButton";
import ProjectShowcase from "./ProjectShowcase";
import { useState } from "react";

const projects = [
    {
        id : 1,
        img : "/p1.webp",
        name : "Cloud Drive",
        description : "This is some desc about the cloud drive project."
    },
    {
        id : 2,
        img : "/bg.jpg",
        name : "Cloud Drive",
        description : "This is some desc about the cloud drive project."
    },
    {
        id : 3,
        img : "/bg.jpg",
        name : "Cloud Drive",
        description : "This is some desc about the cloud drive project."
    },
    {
        id : 4,
        img : "/bg.jpg",
        name : "Cloud Drive",
        description : "This is some desc about the cloud drive project."
    }
]

export default function Projects({}){
    const [activeProjectImage, setActiveProjectImage] = useState(null)
    const [mouseState, setMouseState] = useState(false)
    return (
        <div className="h-screen w-screen relative bg-transparent flex justify-end flex-col overflow-hidden">
            <div className="absolute md:right-10 h-full w-[90%] md:w-fit self-center flex flex-col justify-center mb-20">
                <ProjectShowcase activeProjectImage={activeProjectImage} mouseState={mouseState}/>
            </div>

            <div className="gap-4 w-full flex p-4 md:justify-between md:p-10 flex-col">
                {/* Bottom Left: Large Headline */}
                <h2 className="font-oswald text-5xl md:text-8xl lg:text-9xl font-bold text-text-main leading-[0.85] tracking-tight uppercase">
                    My
                    <span className="text-text-muted"> Projects</span> <br />
                </h2>
                <div className="z-10 w-full flex md:flex-row flex-col items-start md:items-center justify-between gap-6">
                    <p className="md:max-w-[25vw] text-start">
                        This is something about me, I am the best!!! These are my projects here. 
                        See nigga, you won't be able to see these ever again nigga, so see these ones carefully.
                        Have you ever seen this "kahi bhi"?
                    </p>
                    <div className="z-10 flex flex-row md:items-end gap-4 md:justify-end">
                        {projects.map((project, key)=>{
                            return <ProjectButton key={key} img={project.img} 
                            setActiveProjectImage={setActiveProjectImage} 
                            activeProjectImage={activeProjectImage} 
                            setMouseState={setMouseState}/>
                        })}
                    </div>
                </div>
                {/* Bottom Right: Project Images */}
            </div>
        </div>
    )
}