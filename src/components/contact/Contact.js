import Paragraph from "./Paragraph";
const arr = [
    {
        text : "Got an idea that's waiting to come alive? Let's build it together. Whether you're a designer, developer, or a creative studio, I'd love to collaborate and turn your thoughts into something real.",
        buttonTexts : ["Let's Collaborate"],
        buttonFn : [
            () => {
                const link = document.createElement("a");
                link.href = "mailto:kartikkala10december@gmail.com";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },

        ],
        className : "text-white font-oswald border border-white p-1 px-8 overflow-hidden w-fit cursor-pointer h-[2.2em]"
    },
    {
        text : "If you're a digital agency or company looking for a designer, developer who cares about details, motion, and meaningful design. I'm always open to exciting opportunities. ",
        buttonTexts : ["Hire Me"],
        buttonFn : [
            () => {
                const link = document.createElement("a");
                link.href = "mailto:kartikkala10december@gmail.com";
                document.body.appendChild(link);
                link.target = "_blank";
                link.click();
                document.body.removeChild(link);
            },
        ],
        className : "text-white font-oswald border border-white p-1 px-5 overflow-hidden w-fit cursor-pointer h-[2.2em] bg-black hover:bg-transparent duration-300"
    },
    {
        text : "You can reach me through any of my socials below or drop me a message. I'd be happy to connect, collaborate, or just chat about new ideas. ",
        buttonTexts : ["LinkedIn", "Github", "Email"],
        buttonFn : [
            () => {
                const link = document.createElement("a");
                link.href = "https://www.linkedin.com/in/kartikkala/";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },
            () => {
                const link = document.createElement("a");
                link.href = "https://github.com/Kartikkala";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },
            () => {
                const link = document.createElement("a");
                link.href = "mailto:kartikkala10december@gmail.com";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        ],
        className : "text-white font-oswald p-1 overflow-hidden w-fit cursor-pointer h-[2.2em]"
    },
]

export default function Contact({}){
    return (
        <div id="contact" className="absolute gap-4 w-full flex bottom-4 px-4 md:justify-between md:px-10 md:flex-row flex-col">
            <div className="flex flex-col text-white w-full h-full justify-end">
                <h3 className="font-oswald text-[8vw]"><span className="font-bold">GET IN</span> TOUCH</h3>
                <div className="flex md:flex-row flex-col justify-between gap-8">
                    {arr.map((elem, key)=>{
                        return <Paragraph
                        key={key}
                        buttonClassname={elem.className} 
                        paragraphText={elem.text}
                        buttonTextArr={elem.buttonTexts}
                        buttonOnClickFnArr={elem.buttonFn}/>
                    })}
                </div>
                <svg viewBox="0 -2 82 15" className="w-full font-oswald uppercase">
                   <text 
                     x="50%" 
                     y="50%" 
                     textAnchor="middle" 
                     dominantBaseline="middle" 
                     className="fill-current"
                   >
                     <tspan className="font-bold">Kartik</tspan> <tspan>Kala</tspan>
                   </text>
                </svg>
            </div>
        </div>
    )
}