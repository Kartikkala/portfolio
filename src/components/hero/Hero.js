import { socials } from "../../app/data";

export default function Hero() {
    return (
        <section id="hero" className="h-screen w-full relative overflow-hidden bg-transparent">

            {/* Center: Silhouette / Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bg.jpg"
                    alt="Profile Silhouette"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            <div className="absolute gap-4 w-full flex bottom-4 px-4 md:bottom-10 md:justify-between md:px-10 md:flex-row flex-col">
                {/* Bottom Left: Large Headline */}
                <div className=" z-10 max-w-2xl">
                    <h2 className="font-oswald text-5xl md:text-8xl lg:text-9xl font-bold text-text-main leading-[0.85] tracking-tight uppercase">
                        Creative <br />
                        <span className="text-text-muted">Designer</span> <br />
                        & Developer.
                    </h2>
                </div>

                {/* Bottom Right: Description & CTA */}
                <div className="z-10 flex flex-col md:items-end md:text-right gap-4 max-w-md md:justify-end">
                    <p className="text-text-muted text-sm md:text-base leading-relaxed md:block">
                        A designer who loves to code and a developer who loves to design. I create things that look simple, but feel alive.
                    </p>

                    <h3 className="font-oswald text-2xl md:text-3xl text-text-main uppercase md:block">
                        Move People, <br /> Not Just <span className="font-playfair italic lowercase">screens.</span>
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
