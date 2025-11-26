import { socials } from "../../app/data";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 gap-8">
                    <div className="inline-block px-4 py-2 text-xs font-bold tracking-wider text-[#b4befe] uppercase neu-pressed rounded-full">
                        Available for hire
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#f4dfdb] tracking-tight leading-tight drop-shadow-lg">
                        Building Digital <br />
                        <span className="text-[#b4befe]">Experiences</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#9da3bd] max-w-2xl leading-relaxed">
                        I engineer software where performance is intentional, control is explicit, and customisation isn’t optional.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl neu-btn text-[#a6adc8] hover:text-[#b4befe] transition-all duration-200">
                                <span className="text-2xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
                        <a href="#projects" className="rounded-xl neu-btn p-4 px-8 font-bold text-[#f4dfdb] hover:text-[#b4befe] duration-200 transition-colors text-center">View My Work</a>
                        <a href="mailto:hello@example.com" className="rounded-xl neu-pressed p-4 px-8 font-bold text-[#a6adc8] hover:text-[#f4dfdb] duration-200 transition-colors text-center">Contact Me</a>
                    </div>
                </div>

                {/* Photo Content */}
                <div className="flex justify-center md:justify-end z-10 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full neu-flat p-2 flex items-center justify-center overflow-hidden border-4 border-[#313244]">
                        {/* Placeholder Image - Replace with actual photo */}
                        <img
                            src="https://placehold.co/400"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
