import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none">
            {/* Floating Logo */}
            <div className="pointer-events-auto neu-float rounded-2xl p-3 px-6 font-bold text-2xl text-[#f4dfdb] hover:scale-105 transition-transform duration-200">
                ;) Kartik
            </div>

            {/* Floating Navigation */}
            <nav className="hidden md:flex pointer-events-auto neu-float rounded-2xl p-3 px-8 gap-8 items-center">
                <a href="#projects" className="hover:text-[#b4befe] transition-colors font-medium">Projects</a>
                <a href="#certifications" className="hover:text-[#b4befe] transition-colors font-medium">Certifications</a>
                <a href="#blogs" className="hover:text-[#b4befe] transition-colors font-medium">Blogs</a>
            </nav>

            {/* Floating Resume Button */}
            <div className="pointer-events-auto">
                <a href="/resume.pdf" download className="flex items-center gap-2 neu-float rounded-2xl p-3 px-6 font-bold hover:bg-[#45475a] transition-colors text-[#f4dfdb] cursor-pointer hover:scale-105 duration-200">
                    <span className="text-sm">Resume</span>
                    <MdOutlineFileDownload className="text-xl" />
                </a>
            </div>
        </div>
    );
}
