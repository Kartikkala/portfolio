export default function Contact() {
    return (
        <section id="contact" className="flex flex-col z-10 gap-10 items-center text-center py-24 border-t border-white/5 mt-10">
            <h3 className="text-5xl md:text-6xl font-bold text-text-main">Let's Connect</h3>
            <p className="text-text-muted max-w-xl text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:hello@example.com" className="rounded-xl neu-btn p-5 px-12 font-bold text-text-main hover:text-accent duration-200 transition-colors text-xl">
                Say Hello
            </a>
            <p className="text-sm text-text-muted/50 mt-12">© 2024 Kartik. All rights reserved.</p>
        </section>
    );
}
