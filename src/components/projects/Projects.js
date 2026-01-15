import { useAppSelector } from "@/lib/hooks";
import ProjectButton from "./ProjectButton";
import ProjectShowcase from "./ProjectShowcase";
import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        id : 1,
        img : "/clouddrive.webp",
        githubLink : "https://github.com/Kartikkala/personal_cloud_drive",
        name : "Personal Cloud Drive",
        description : "Personal Cloud Drive is a full-stack cloud storage application engineered to provide tech-savy and privacy conscious users the ability to self-host a Cloud-Drive on their own hardware. Supports features like video streaming, file uploads via non-conventional methods (torrents and URIs) besides the conventional method of uploads, and admin panel to manage users. Future improvements include Adaptive Bitrate support for video streaming, photo-gallery, built in music player, RBAC for user management and optinal sync via other cloud providers like Google Drive/One Drive for easier migration. For suggestions, feel free to open an issue on the github!",
        tagline : "r/Selfhost" ,
        year : 2024,
        tools: ["Typescript", "MERN Stack", "ffmpeg", "Jenkins"]
    },
    {
        id : 2,
        img : "/arise.webp",
        githubLink : "https://github.com/Kartikkala/resume_checker_backend",
        name : "ARISE - AI based Resume Scanner",
        description : "ARISE is a resume scanner, that uses machine learning model to assign each resume with a score and room for improvements. This project is targeted for job-seekers to optimize their resumes according to a job description. Future improvements include usage of transformers architecture for dynamic suggestions, addition of image recognition technologies for alignment detection.",
        tagline : "Optimize your resume!" ,
        year : 2024,
        tools: ["Java", "Spring Boot", "TF-IDF", "Flask", "React.js"]
    },
    {
        id : 3,
        img : "/egopeek.webp",
        githubLink : "https://github.com/Kartikkala/esports_website",
        name : "Ego Peek",
        description : "Ego Peek is a fully featured web-application, developed to help Esports-orgs create events related to any multiplayer video game in their region. This web app supports creation of event for any kind of video game, put an entry fee and prizepool to it, collect the entry-fee via payment gateway (Razorpay), and then declare the winner via their in-game ID for easy user search. Future improvements include auto-pay to the winner which currently only gives their payment address (UPI-ID).",
        tagline : "Play!" ,
        year : 2024,
        tools: ["Typescript", "MERN Stack", "Razorpay API", "Docker"]
    },
    {
        id : 4,
        img : "/efi.webp",
        githubLink : "https://github.com/Kartikkala/efi_signing_binary",
        name : "EFI Signing Binary",
        description : "This tool is used to sign .efi files on a system in buld (inside directories). This tool uses sbctl, so to utilise this tool, one has to install sbctl on their linux desktop.",
        tagline : "Sign it!" ,
        year : 2024,
        tools: ["C++", "sbctl", "Arch Linux"]
    },
    
]

export default function Projects({}){
    const [activeProjectImage, setActiveProjectImage] = useState(null)
    const [activeProjectId, setActiveProjectId] = useState(null)
    const {mouseInsideProject} = useAppSelector(state => state.project)

    return (
        <div className="h-[100lvh] w-screen relative bg-transparent flex justify-end flex-col overflow-hidden">
            <div className="absolute z-[-10] top-0 left-0 w-full h-[100vh] overflow-hidden">
            {/* 1. Map through your projects array instead of a single img */}
            {projects.map((project) => {
                // Calculate the specific image path for this project
                const bgImageSrc = `${project.img.split(".")[0]}-bg.webp`;
            
                // 2. Check if THIS project is the active one
                const isActive = mouseInsideProject && (activeProjectImage === project.img);
            
                return (
                    <Image
                        key={project.id} // or project.name
                        src={bgImageSrc}
                        sizes="100vw"
                        fill
                        alt="Project Background"
                        priority={false}
                        className={`
                            absolute top-0 left-0 w-full h-full object-cover
                            transition-opacity duration-500 ease-in-out
                            ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                    />
                );
            })}
        </div>
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
                        Each of my projects has been developed with a motive in mind. Most of these are backend-heavy project with functional and performant user-interface that aims to keep user-experience on the top priority. 
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