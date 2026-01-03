export default function About({imgPath}){

    return (
    <div className="flex flex-col p-10 justify-end gap-4 min-h-dvh z-20">
        <div className="flex w-fit self-start">   
            <h1 className="font-oswald text-7xl w-fit self-start">
                <span className="font-bold">ABOUT</span> <span className="text-white">ME</span>
            </h1>
        </div>
        
        <div className="flex gap-4">
            <img src={imgPath} className="w-[50vw] h-[70vh]"/>
            <div className="flex flex-col">
                <p className="text-white">
                    Greetings! I am Kartik Kala, a Software Developer specializing in Web Development. Welcome to my portfolio! Anyways, where do I start... and where do I end... There is a huge sea of qualities that I can't seem to quantize in form of words and write here in a single about section of this portfolio... Which btw is a mere demonstration of my greatness. Anyways, you can always contact me from the contact section below, in case you wanna witness my greatness. You can wander around and look into the projects I have created, my education timeline, Github repos, leetcode links (not a hardcore DSA guy btw). And... yeah, that's all I have. No fancy certifications because as a student, I obviously can't afford to do any of those pesky, expensive, glowy certifications... Which I don't know why someone would even look for. I mean you can literally see what I am building around here. Anyways, Happy Stalking!
                </p>
            </div>
        </div>

    </div>)
}