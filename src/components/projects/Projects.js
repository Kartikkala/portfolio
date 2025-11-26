import Project from "./ProjectCard";
import { projects } from "../../app/data";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col z-10 gap-16 scroll-mt-32">
            <div className="flex flex-col gap-2 border-l-4 border-[#b4befe] pl-6">
                <h3 className="text-4xl font-bold text-[#f4dfdb]">Projects</h3>
                <p className="text-[#a6adc8] text-lg">Things I've built</p>
            </div>
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
