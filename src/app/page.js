import { MdOutlineFileDownload } from "react-icons/md";
import Project from "./project";
import Certification from "./certification";
import Blog from "./blog";
import Stats from "./stats";
import { projects, certifications, blogs, socials } from "./data";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-[#1A1A2E] relative text-[#a6adc8]">

      {/* Grid Background */}
      <div
        className="absolute z-0 inset-0 h-full w-full bg-[#1e1e2e] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Navbar */}
      <nav className="flex h-16 fixed top-0 bg-[#1e1e2e]/80 backdrop-blur-md border-b border-[#313244] text-[#a6adc8] z-50 justify-around w-full items-center">
        <div className="font-bold flex text-2xl text-[#f4dfdb]">
          ;) Kartik
        </div>
        <div className="gap-6 flex items-center">
          <a href="#projects" className="hover:text-[#b4befe] transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-[#b4befe] transition-colors">Certifications</a>
          <a href="#blogs" className="hover:text-[#b4befe] transition-colors">Blogs</a>
          <div className="inline-flex relative group">
            <a href="/resume.pdf" download className="flex items-center gap-2 rounded-md bg-[#313244] p-2 font-bold hover:bg-[#45475a] transition-colors text-[#f4dfdb] cursor-pointer">
              <span className="text-sm">Resume</span>
              <MdOutlineFileDownload className="text-xl" />
            </a>
          </div>
        </div>
      </nav>


      {/* Main parent container containing sections */}
      <div className="flex flex-col w-full max-w-6xl mx-[max(5vw,12px)] gap-24 pb-10">

        {/* Section 1: Hero */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center z-1 gap-12 justify-between min-h-screen pt-16">
          {/* Div 1 */}
          <div className="flex flex-col items-start z-1 gap-6 text-left max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-[#f4dfdb] leading-tight">Software <br /> Developer</h1>
            <h3 className="text-xl md:text-2xl text-[#9da3bd] leading-relaxed">I engineer software where performance is intentional, control is explicit, and customisation isn’t optional.
            </h3>

            {/* Socials in Hero */}
            <div className="flex gap-4 mt-4">
              {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#313244] text-[#a6adc8] hover:text-[#b4befe] hover:bg-[#45475a] transition-all duration-200 transform hover:-translate-y-1">
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#projects" className="rounded-xl bg-[#b4befe] p-3 px-6 font-bold text-gray-900 hover:text-[#b4befe] hover:bg-gray-900 duration-250 transition-colors">View My Work</a>
              <a href="mailto:hello@example.com" className="rounded-xl bg-[#313244] backdrop-blur-md p-3 px-6 font-bold text-[#d5dffd] hover:text-[#313244] hover:bg-[#d5dffd] duration-250 transition-colors">Contact Me</a>
            </div>
          </div>

          {/* Div 2 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b4befe] to-[#f4dfdb] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#313244] p-32 md:p-40 rounded-xl flex items-center justify-center">
              {/* Placeholder for Hero Image */}
              <span className="text-[#a6adc8] font-mono text-lg">&lt;Code /&gt;</span>
            </div>
          </div>
        </section>

        {/* Section 2: Stats */}
        <section id="stats" className="z-10">
          <Stats />
        </section>

        {/* Section 3: Projects */}
        <section id="projects" className="flex flex-col z-10 gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[#f4dfdb]">Projects</h3>
            <p className="text-[#a6adc8]">Things I've built</p>
          </div>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Section 4: Certifications */}
        <section id="certifications" className="flex flex-col z-10 gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[#f4dfdb]">Certifications</h3>
            <p className="text-[#a6adc8]">Credentials & Achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Certification key={index} {...cert} />
            ))}
          </div>
        </section>

        {/* Section 5: Blogs */}
        <section id="blogs" className="flex flex-col z-10 gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-[#f4dfdb]">Blogs</h3>
            <p className="text-[#a6adc8]">Thoughts & Tutorials</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>
        </section>

        {/* Section 6: Contact Footer */}
        <section id="contact" className="flex flex-col z-10 gap-8 items-center text-center py-10 border-t border-[#313244] mt-0">
          <h3 className="text-4xl font-bold text-[#f4dfdb]">Let's Connect</h3>
          <p className="text-[#a6adc8] max-w-xl">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="rounded-xl bg-[#b4befe] p-4 px-8 font-bold text-gray-900 hover:text-[#b4befe] hover:bg-gray-900 duration-250 transition-colors text-lg">
            Say Hello
          </a>
          <p className="text-sm text-[#a6adc8]/50 mt-4">© 2024 Kartik. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
}
