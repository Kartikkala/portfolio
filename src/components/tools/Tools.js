import { 
  SiTypescript, 
  SiNextdotjs, 
  SiGreensock, 
  SiPostgresql, 
  SiDocker, 
  SiArchlinux,
  SiJenkins,
  SiNodedotjs,
  SiSpring
} from "react-icons/si";

export default function Tools({}){
    return (
        <div className="flex flex-col w-[95%] gap-8 mt-20">
            <h1 className="self-center mt-10 text-3xl font-oswald">Technologies I work upon</h1>
            <div className="grid grid-cols-3 gap-4 w-full">
                
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiNextdotjs className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Next.js</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiTypescript className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">TypeScript</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiGreensock className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">GSAP</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiSpring className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Spring Boot</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiPostgresql className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">PostgreSQL</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiArchlinux className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Arch Linux</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiDocker className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Docker</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiJenkins className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Jenkins</span>
                </div>
                <div className="bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer">
                    <SiNodedotjs className="text-white text-5xl" />
                    <span className="text-gray-300 font-medium">Node.js</span>
                </div>
            </div>
        </div>
    )
}