export default function About({imgPath}){

    return (
    <div id="about" className="flex flex-col p-10 justify-end gap-4 min-h-lvh z-20">
        <div className="flex w-fit self-start">   
            <h1 className="font-oswald text-7xl w-fit self-start">
                <span className="font-bold hollow-text">ABOUT</span> <span className="text-white">ME</span>
            </h1>
        </div>
        
        <div className="flex md:flex-row flex-col gap-4">
            <img src={imgPath} className="md:w-[50vw] md:h-[70vh] w-[80vw] h-[30vh]" loading="lazy"/>
            <div className="flex flex-col">
                <p className="text-white text-xl font-light">
                   Greetings! I’m Kartik Kala, a Software Developer specializing in full-stack web development. Welcome to my portfolio!
                    <br/>
                    <br/>
                   I build high-quality, performant web applications using modern web technologies, with a strong emphasis on functionality and performance. I believe software should be reliable, scalable, and fast — not weighed down by excessive animations or unnecessary abstractions. Most of my work leans heavily toward backend systems, but I care deeply about delivering a smooth and thoughtful user experience.
                    <br/>
                    <br/>
                    If you’re here to explore my work — welcome.
                    <br/>
                    <br/>
                    If you’re here to stalk — well… happy stalking ;)
                </p>
            </div>
        </div>

    </div>)
}