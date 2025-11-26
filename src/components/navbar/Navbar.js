import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none">
            {/* Floating Logo */}
            {/* Floating Logo */}
            <a href="#hero" className="pointer-events-auto neu-float rounded-2xl p-3 px-6 font-bold text-2xl text-text-main hover:scale-105 transition-transform duration-200">
                ;) Kartik
            </a>

            {/* Floating Navigation */}
            <nav className="hidden md:flex pointer-events-auto neu-float rounded-2xl p-3 px-8 gap-8 items-center">
                <a href="#projects" className="hover:text-accent transition-colors font-medium text-text-muted">Projects</a>
                <a href="#certifications" className="hover:text-accent transition-colors font-medium text-text-muted">Certifications</a>
                <a href="#blogs" className="hover:text-accent transition-colors font-medium text-text-muted">Blogs</a>
            </nav>

            {/* Floating Resume Button */}
            <div className="pointer-events-auto">
                <a href="/resume.pdf" download className="flex items-center gap-2 neu-float rounded-2xl p-3 px-6 font-bold hover:bg-surface transition-colors text-text-main cursor-pointer hover:scale-105 duration-200">
                    <span className="text-sm">Resume</span>
                    <MdOutlineFileDownload className="text-xl" />
                </a>
            </div>
        </div>
    );
}
