import Project from "./ProjectCard";
import { projects } from "../../app/data";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col z-10 gap-16 scroll-mt-32">
            <div className="flex flex-col gap-2 border-l-4 border-accent pl-6">
                <h3 className="text-4xl font-bold text-text-main">Projects</h3>
                <p className="text-text-muted text-lg">Things I've built</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
