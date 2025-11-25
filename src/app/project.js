import Tool from "./tool"
export default function Project({title, type, description, tools, demoLink,sourceCode}){
    return (
        <div className="flex gap-8">
            <div className="p-36 bg-amber-400 min-h-[200px] min-w-[350px] rounded-xl">

            </div>
            <div className="flex flex-col justify-around">
                <div className="flex flex-col gap-1 mt-2">
                    <h4 className="text-md font-bold">{type}</h4>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-md">{description}</p>
                    <div className="flex gap-3">{tools?.map((tool, index)=>{
                        return <Tool title={tool} key={index}/>
                    })}</div>
                </div>
                <div className="flex gap-4 flex-row">
                    <a href={demoLink} className="rounded-xl bg-[#b4befe] p-3 px-4 text-gray-900 hover:text-[#b4befe] hover:bg-gray-900 duration-250">Live Demo</a>
                    <a href={demoLink} className="rounded-xl bg-[#313244] backdrop-blur-md p-3 text-[#d5dffd] hover:text-[#313244] hover:bg-[#d5dffd] duration-250">Source Code</a>
                </div>
            </div>
        </div>
    )
}