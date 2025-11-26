import { FaBookOpen } from "react-icons/fa";

export default function Blog({ title, summary, date, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <div className="flex flex-col h-full gap-4 p-6 rounded-xl neu-flat hover:scale-[1.02] transition-transform duration-200">
                <div className="flex justify-between items-start">
                    <div className="p-3 rounded-lg neu-pressed text-[#b4befe]">
                        <FaBookOpen size={20} />
                    </div>
                    <span className="text-sm text-[#a6adc8]">{date}</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#f4dfdb] group-hover:text-[#b4befe] transition-colors mb-2">{title}</h3>
                    <p className="text-[#a6adc8] line-clamp-3">{summary}</p>
                </div>
            </div>
        </a>
    );
}
