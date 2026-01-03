import ProjectButton from "./ProjectButton";
import ProjectShowcase from "./ProjectShowcase";
import { useState } from "react";

const projects = [
    {
        id : 1,
        img : "/clouddrive.png",
        name : "Cloud Drive",
        description : "CloudVault is a full-stack cloud storage application engineered to mimic the core functionality of enterprise-level platforms like Google Drive. The primary goal was to build a system capable of handling complex file operations—uploads, folder nesting, and file visualization—while maintaining a high-performance, non-blocking user interface. Also it supports adaptive bitrate streaming for video files that enhances user experience by reducing the amount of data usage.",
        tagline : "This is a tagline." ,
        year : 2024,
        tools: ["Typescript", "MERN Stack", "ffmpeg", "Jenkins"]
    },
    {
        id : 2,
        img : "/arise.png",
        name : "ARISE - AI based Resume Scanner",
        description : "This is some desc about ARISE (AI based Resume Scanner).",
        tagline : "This is a tagline." ,
        year : 2024,
        tools: ["Typescript", "MERN Stack", "ffmpeg", "Jenkins"]
    },
    {
        id : 3,
        img : "/bg.jpg",
        name : "Esports Website",
        description : "This is some desc about the cloud drive project.",
        tagline : "This is a tagline." ,
        year : 2024,
        tools: ["Typescript", "MERN Stack", "ffmpeg", "Jenkins"]
    },
    {
        id : 4,
        img : "/efi.png",
        name : "EFI Signing Binary",
        description : "This is some desc about the efi signing binary.",
        tagline : "This is a tagline." ,
        year : 2024,
        tools: ["C++", "sbctl", "Arch Linux"]
    },
    
]

export default function Projects({}){
    const [activeProjectImage, setActiveProjectImage] = useState(null)
    const [activeProjectId, setActiveProjectId] = useState(null)

    return (
        <div className="h-[100dvh] w-screen relative bg-transparent flex justify-end flex-col overflow-hidden">
            <div className="absolute md:right-10 h-full w-[90%] md:w-fit self-center flex flex-col justify-center mb-20">
                <ProjectShowcase activeProjectImageId={activeProjectId} activeProjectImage={activeProjectImage}/>
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
                            return <ProjectButton projectData={project} key={key} img={project.img} 
                            setActiveProjectImage={setActiveProjectImage} 
                            activeProjectImage={activeProjectImage}
                            setActiveProjectId={setActiveProjectId}/>
                        })}
                    </div>
                </div>
                {/* Bottom Right: Project Images */}
            </div>
        </div>
    )
}