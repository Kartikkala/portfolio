"use client";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Certifications from "../components/certifications/Certifications";
import Blogs from "../components/blogs/Blogs";
import Contact from "../components/contact/Contact";
import ScrollNavigation from "../components/common/ScrollNavigation";

export default function Home() {
  return (
    <div id="main-scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background font-sans relative text-text-muted overflow-x-hidden">

      <Navbar />
      <ScrollNavigation />

      {/* Main parent container containing sections */}
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12">

        <section className="min-h-screen snap-start flex flex-col justify-center">
          <Hero />
        </section>

        <section className="min-h-screen snap-start flex flex-col justify-center py-20">
          <Projects />
        </section>

        <section className="min-h-screen snap-start flex flex-col justify-center py-20">
          <Certifications />
        </section>

        <section className="min-h-screen snap-start flex flex-col justify-center py-20">
          <Blogs />
        </section>

        <section className="min-h-screen snap-start flex flex-col justify-center py-20">
          <Contact />
        </section>
      </div>
    </div>
  );
}
