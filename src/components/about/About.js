export default function About({imgPath}){

    return (
    <div className="flex flex-col p-10 justify-end gap-4 min-h-dvh z-20">
        <div className="flex w-fit self-start">   
            <h1 className="font-oswald text-7xl w-fit self-start">
                <span className="font-bold">ABOUT</span> <span className="text-white">ME</span>
            </h1>
        </div>
        
        <div className="flex md:flex-row flex-col gap-4">
            <img src={imgPath} className="md:w-[50vw] md:h-[70vh] w-[80vw] h-[30vh]"/>
            <div className="flex flex-col">
                <p className="text-white">
                    Greetings! I am Kartik Kala, a Software Developer specializing in Web Development. Welcome to my portfolio! Anyways, where do I start... and where do I end... There is a huge sea of qualities that I can't seem to quantize in form of words and write here in a single about section of this portfolio... Which btw is a mere demonstration of my greatness.
                </p>
            </div>
        </div>

    </div>)
}