import Tool from "../common/Tool"
export default function Project({ title, type, description, tools, demoLink, sourceCode }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 neu-flat p-8 rounded-2xl">
            <div className="p-36 bg-amber-400/20 min-h-[200px] min-w-[300px] rounded-xl neu-pressed">
                {/* Placeholder for project image */}
            </div>
            <div className="flex flex-col justify-around">
                <div className="flex flex-col gap-2 mt-2">
                    <h4 className="text-md font-bold text-[#b4befe]">{type}</h4>
                    <h3 className="text-2xl font-bold text-[#f4dfdb]">{title}</h3>
                    <p className="text-md text-[#a6adc8]">{description}</p>
                    <div className="flex gap-3 flex-wrap">{tools?.map((tool, index) => {
                        return <Tool title={tool} key={index} />
                    })}</div>
                </div>
                <div className="flex gap-4 flex-row mt-6">
                    <a href={demoLink} className="rounded-xl neu-btn p-3 px-6 text-[#f4dfdb] font-bold">Live Demo</a>
                    <a href={sourceCode} className="rounded-xl neu-btn p-3 px-6 text-[#a6adc8]">Source Code</a>
                </div>
            </div>
        </div>
    )
}