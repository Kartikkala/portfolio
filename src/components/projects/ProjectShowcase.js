import { useAppSelector } from "@/lib/hooks";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ProjectShowcase({ activeProjectImage, activeProjectImageId }) {
    const maskRef = useRef(null); // The div that unfolds (Clip Path)
    const imgRef = useRef(null);  // The image that scales (Zoom)
    const tlRef = useRef(null);
    const {isOverlayOpen, mouseInsideProject} = useAppSelector((state)=> state.project)

    useEffect(() => {
        const tl = gsap.timeline({
            paused : true
        })
        tl.fromTo(maskRef.current,
            {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.7,
                ease: "power3.out",
                overwrite: true
            }
        )
        .fromTo(imgRef.current,
            {
                scale: 1.3, // Start zoomed in
            },
            {
                scale: 1,   // End normal
                duration: 0.5,
                ease: "power3.out",
                overwrite: true
            },
            "<"
        );

        tlRef.current = tl;

    }, [activeProjectImage]);

    useEffect(()=>{
        if(!tlRef.current) return;
        else if(mouseInsideProject)
            tlRef.current.play();
        else{
            tlRef.current.reverse();
        }
    }, [mouseInsideProject, activeProjectImage, isOverlayOpen]);
    return (
        <div id={activeProjectImageId} className="lg:h-[50vh] lg:w-[35vw] h-[20vh] w-full">
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