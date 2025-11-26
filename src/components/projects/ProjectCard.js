import Tool from "../common/Tool"
export default function Project({ title, type, description, tools, demoLink, sourceCode }) {
    return (
        <div className="flex flex-col gap-6 neu-flat p-6 rounded-2xl h-full">
            <div className="w-full h-48 bg-surface rounded-xl neu-pressed flex-shrink-0">
                {/* Placeholder for project image */}
            </div>
            <div className="flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider">{type}</h4>
                    <h3 className="text-xl font-bold text-text-main">{title}</h3>
                    <p className="text-sm text-text-muted line-clamp-3">{description}</p>
                    <div className="flex gap-2 flex-wrap mt-2">{tools?.map((tool, index) => {
                        return <Tool title={tool} key={index} />
                    })}</div>
                </div>
                <div className="flex gap-3 mt-2">
                    <a href={demoLink} className="flex-1 rounded-lg neu-btn py-2 px-4 text-text-main font-bold text-sm text-center hover:text-accent">Live Demo</a>
                    <a href={sourceCode} className="flex-1 rounded-lg neu-btn py-2 px-4 text-text-muted text-sm text-center hover:text-accent">Source Code</a>
                </div>
            </div>
        </div>
    )
}