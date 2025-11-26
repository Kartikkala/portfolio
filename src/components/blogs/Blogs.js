import Blog from "./BlogCard";
import { blogs } from "../../app/data";

export default function Blogs() {
    return (
        <section id="blogs" className="flex flex-col z-10 gap-16 scroll-mt-32">
            <div className="flex flex-col gap-2 border-l-4 border-[#b4befe] pl-6">
                <h3 className="text-4xl font-bold text-[#f4dfdb]">Blogs</h3>
                <p className="text-[#a6adc8] text-lg">Thoughts & Tutorials</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
                {blogs.map((blog, index) => (
                    <Blog key={index} {...blog} />
                ))}
            </div>
        </section>
    );
}
