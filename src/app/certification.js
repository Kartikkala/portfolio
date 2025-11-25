import { FaCertificate } from "react-icons/fa";

export default function Certification({ title, issuer, date, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-[#313244] hover:bg-[#45475a] transition-colors duration-200">
                <div className="p-3 rounded-full bg-[#b4befe] text-gray-900">
                    <FaCertificate size={24} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#f4dfdb] group-hover:text-[#b4befe] transition-colors">{title}</h3>
                    <p className="text-[#a6adc8]">{issuer} • {date}</p>
                </div>
            </div>
        </a>
    );
}
