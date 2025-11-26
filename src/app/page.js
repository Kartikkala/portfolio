import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Certifications from "../components/certifications/Certifications";
import Blogs from "../components/blogs/Blogs";
import Stats from "../components/stats/Stats";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#313244] font-sans relative text-[#a6adc8] overflow-x-hidden">

      {/* Grid Background */}
      {/* Grid Background - Removed as per user request */}

      <Navbar />

      {/* Main parent container containing sections */}
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 gap-32 pb-20">

        <Hero />

        {/* Section 2: Stats */}
        <section id="stats" className="z-10 scroll-mt-32">
          <Stats />
        </section>

        <Projects />

        <Certifications />

        <Blogs />

        <Contact />
      </div>
    </div>
  );
}
