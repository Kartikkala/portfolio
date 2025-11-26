import { FaBookOpen } from "react-icons/fa";

export default function Blog({ title, summary, date, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <div className="flex flex-col h-full gap-4 p-6 rounded-xl neu-flat hover:scale-[1.02] transition-transform duration-200">
                <div className="flex justify-between items-start">
                    <div className="p-3 rounded-lg neu-pressed text-accent">
                        <FaBookOpen size={20} />
                    </div>
                    <span className="text-sm text-text-muted">{date}</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors mb-2">{title}</h3>
                    <p className="text-text-muted line-clamp-3">{summary}</p>
                </div>
            </div>
        </a>
    );
}
