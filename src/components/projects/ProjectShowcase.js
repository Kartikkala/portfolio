import { useAppSelector } from "@/lib/hooks";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ProjectShowcase({ activeProjectImage, mouseState }) {
    const containerRef = useRef(null);
    const maskRef = useRef(null); // The div that unfolds (Clip Path)
    const imgRef = useRef(null);  // The image that scales (Zoom)
    const {isOverlayOpen} = useAppSelector((state)=> state.project)

    useEffect(() => {
        gsap.context(() => {
            if (mouseState) {
                // 1. UN-FOLD THE WRAPPER (Mask)
                gsap.fromTo(maskRef.current,
                    {
                        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                    },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        duration: 0.7,
                        ease: "power3.out",
                        overwrite: true
                    }
                );

                // 2. ZOOM THE IMAGE (Inside the mask)
                gsap.fromTo(imgRef.current,
                    {
                        scale: 1.3, // Start zoomed in
                    },
                    {
                        scale: 1,   // End normal
                        duration: 0.5,
                        ease: "power3.out",
                        overwrite: true
                    }
                );

            } else {
                gsap.to(maskRef.current, {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                    duration: 0.7,
                    ease: "power3.in",
                    overwrite: true
                });
                gsap.to(imgRef.current, {
                    duration : 0.8,
                    scale: 1.3,
                    ease: "power3.in",
                    overwrite: true
                });
            }
        }, containerRef);
    }, [mouseState, activeProjectImage, isOverlayOpen]);

    return (
        <div ref={containerRef} id="project_showcase" className="lg:h-[50vh] lg:w-[35vw] h-[20vh] w-full">
            <div 
                ref={maskRef}
                className="w-full h-full overflow-hidden" 
                style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}}
            >
                <img
                    ref={imgRef}
                    src={activeProjectImage}
                    className="object-cover w-full h-full origin-center"
                />
            </div>
        </div>
    );
}