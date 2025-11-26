export default function Contact() {
    return (
        <section id="contact" className="flex flex-col z-10 gap-10 items-center text-center py-24 border-t border-[#3a3b50] mt-10">
            <h3 className="text-5xl md:text-6xl font-bold text-[#f4dfdb]">Let's Connect</h3>
            <p className="text-[#a6adc8] max-w-xl text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:hello@example.com" className="rounded-xl neu-btn p-5 px-12 font-bold text-[#f4dfdb] hover:text-[#b4befe] duration-200 transition-colors text-xl">
                Say Hello
            </a>
            <p className="text-sm text-[#a6adc8]/50 mt-12">© 2024 Kartik. All rights reserved.</p>
        </section>
    );
}
