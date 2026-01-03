import RisingAnimation from "../utils/RisingAnimation";


export default function Hero() {
    return (
        <section id="hero" className="h-[100dvh] w-full relative overflow-hidden bg-transparent">

            <div className="absolute gap-4 w-full flex bottom-4 px-4 md:bottom-10 md:justify-between md:px-10 md:flex-row flex-col">
                {/* Bottom Left: Large Headline */}
                <div className=" z-10 max-w-2xl">
                    <h2 className="font-oswald text-5xl md:text-8xl lg:text-9xl font-bold text-text-main leading-[0.85] tracking-tight uppercase">
                        <RisingAnimation text={" "} secondaryText={"Creative"} className={"h-[0.9em] inline-block"} trigger={true} duration={0.6}/> <br />
                        <span className="text-text-muted">
                            <RisingAnimation text={" "}
                            duration={0.7}
                            secondaryText={"Designer"} className={"h-[0.9em] inline-block"} trigger={true}/>
                            </span> <br />
                        <RisingAnimation 
                        duration={1}
                        text={" "} secondaryText={"& Developer"} className={"h-[0.9em] inline-block"} trigger={true}/>
                    </h2>
                </div>

                {/* Bottom Right: Description & CTA */}
                <div className="z-10 flex flex-col md:items-start md:text-left gap-4 max-w-md md:justify-end">
                    <p className="text-text-muted text-sm md:text-base leading-relaxed md:block">
                        A designer who loves to code and a developer who loves to design. I create things that look simple, but feel alive.
                    </p>

                    <h3 className="font-oswald text-2xl md:text-3xl text-text-main uppercase md:block">
                        Move People, Not Just <span className="font-playfair italic lowercase">screens.</span>
                    </h3>

                    <div className="flex gap-4">
                        <a href="#contact" className="btn-primary uppercase text-sm tracking-widest">
                            Let's Collaborate
                        </a>
                        <a href="mailto:hello@example.com" className="btn-solid uppercase text-sm tracking-widest">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
