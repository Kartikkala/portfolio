export default function Home() {
  return (
    <div className="flex min-h-screen max-w-[200vh] justify-center bg-zinc-50 font-sans dark:bg-[#1A1A2E]">
      <nav className="flex h-fit p-[25px] rounded-xl fixed mt-5 bg-white/10 backdrop-blur-md text-white z-50 justify-between w-[140vh] items-center"
      style={{border: "1px solid rgba(255, 255, 255, 0.18)"}}>
        <div className="font-bold flex text-2xl">
          ;) Kartik
        </div>
        <div className="gap-3 flex items-center">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#connect">Connect</a>
          <button className="rounded-3xl bg-[#2b2bee] p-2 font-bold">Download Resume</button>
        </div>
      </nav>

      {/* Radial BG */}
      <div className="absolute right-[-250px] top-[-200px] w-[800px] h-[800px]
        bg-[radial-gradient(circle_at_center,#533483,#1A1A2E)]
        blur-[140px] opacity-90 pointer-events-none z-0"/>

      {/* Main parent container containing sections */}
      <div className="flex flex-col">

        {/* Section 1 */}
        <section id="hero" className="w-[200vh] mt-14 h-fit flex flex-col items-center z-1 p-32 gap-3">
          <h1 className="text-9xl font-bold">Kartik</h1>
          <h3 className="text-2xl max-w-2xl text-center">Here is some desc about me which says something about me. This is going to be very very long.
            There is something explicit that needs to be changed in this maybe??
          </h3>
          <div className="flex gap-8">
            <button className="rounded-3xl bg-[#2b2bee] p-2 px-3 font-bold">View My Work</button>
            <button className="rounded-3xl border-white/80 bg-white/10 backdrop-blur-md p-3 font-bold" 
            style={{border: "1px solid rgba(255, 255, 255, 0.18)"}}>Connect with Me</button>
          </div>
        </section>

        {/* Section 2 */}
        <section id="projects">
        </section>

        {/* Section 3 */}
        <section id="experience"></section>

        {/* Section 4 */}
        <section id="skills"></section>

        {/* Section 5 */}
        <section id="contact">
          <div className="absolute left-[-300px] bottom-[-300px] w-[900px] h-[900px]
            bg-[radial-gradient(circle_at_center,#0F3460,#1A1A2E)]
            blur-[140px] opacity-80 pointer-events-none"/>
        </section>
      </div>
    </div>
  );
}
