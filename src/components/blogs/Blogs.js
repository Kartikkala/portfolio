import Blog from "./BlogCard";
import { blogs } from "../../app/data";

export default function Blogs() {
    return (
        <div className="flex flex-col w-full z-10 h-lvh mt-32 p-4">
            <h1 className="self-center flex uppercase mt-10 text-3xl font-oswald">My Blogs</h1>
            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5 w-full h-lvh overflow-clip mt-16">
                {blogs.map((blog, index) => (
                    <Blog key={index} {...blog} />
                ))}
                <div className="w-full inverted-shadow absolute bottom-0 z-30"></div>
            </div>
        </div>
    );
}
