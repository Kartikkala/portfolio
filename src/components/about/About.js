export default function About({imgPath}){

    return (
    <div className="flex flex-col p-10 justify-end gap-4 min-h-lvh z-20">
        <div className="flex w-fit self-start">   
            <h1 className="font-oswald text-7xl w-fit self-start">
                <span className="font-bold">ABOUT</span> <span className="text-white">ME</span>
            </h1>
        </div>
        
        <div className="flex md:flex-row flex-col gap-4">
            <img src={imgPath} className="md:w-[50vw] md:h-[70vh] w-[80vw] h-[30vh]" loading="lazy"/>
            <div className="flex flex-col">
                <p className="text-white">
                    Greetings! I am Kartik Kala, a Software Developer specializing in Full-Stack Web Development. Welcome to my portfolio! I use latest web technologies to create high quality and most importantly, performant websites. I believe in making things functional and performant over using ten-thousand animations at one place. Anyways, Happy Stalking!
                </p>
            </div>
        </div>

    </div>)
}