import Certification from "./CertificationCard";
import { certifications } from "../../app/data";

export default function Certifications() {
    return (
        <section id="certifications" className="flex flex-col z-10 gap-16 scroll-mt-32">
            <div className="flex flex-col gap-2 border-l-4 border-accent pl-6">
                <h3 className="text-4xl font-bold text-text-main">Certifications</h3>
                <p className="text-text-muted text-lg">Credentials & Achievements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
                {certifications.map((cert, index) => (
                    <Certification key={index} {...cert} />
                ))}
            </div>
        </section>
    );
}
