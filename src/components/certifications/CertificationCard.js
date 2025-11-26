import { FaCertificate } from "react-icons/fa";

export default function Certification({ title, issuer, date, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <div className="flex flex-col h-full gap-4 p-6 rounded-xl neu-flat hover:scale-[1.02] transition-transform duration-200 justify-between">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full neu-pressed text-accent shrink-0">
                        <FaCertificate size={24} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">{title}</h3>
                        <p className="text-text-muted mt-1">{issuer}</p>
                    </div>
                </div>
                <div className="text-sm text-text-muted/70 text-right">
                    {date}
                </div>
            </div>
        </a>
    );
}
