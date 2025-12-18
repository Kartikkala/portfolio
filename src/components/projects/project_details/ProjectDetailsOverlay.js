import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { closeProject } from "@/lib/slices/projectSlice";

// projectName : string,
// projectDesc : string,
// tagline : string,
// highlight : string,
// tools : array<string>,
// state : boolean
export default function ProjectDetailsOverlay() {
    const { rectPos, selectedProject, isOverlayOpen } = useAppSelector((state) => state.project);
    const dispatch = useAppDispatch();
    
    const barsRef = useRef([]); // To store references to the 5 bars
    const containerRef = useRef(null);
    const ghostImgRef = useRef(null);
    const tlRef = useRef(null);

    useEffect(() => {
            const tl = gsap.timeline({
                paused : true,
                onReverseComplete : ()=>{
                    document.body.style.overflow = "";
                    dispatch(closeProject());
                }
            });

            tl
            .to(containerRef.current, {
                yPercent : 100,
                duration : 0.0001 // Set this duration insanely small so that the layout appears instantly
            })
            .to(barsRef.current,
                {
                    yPercent: 100,  
                    duration: 0.5,
                    stagger: 0.1,  
                    ease: "power3.inOut"
                }
            );

            if (rectPos && ghostImgRef.current) {
                // 1. SET Initial Position (Exactly where the small image is)
                tl.set(ghostImgRef.current, {
                    top: rectPos.top,
                    left: rectPos.left,
                    width: rectPos.width,
                    height: rectPos.height,
                    borderRadius: "0px", // Assuming grid image is square-ish
                    opacity: 1
                }, 0); // Start at time 0

                // 2. ANIMATE to Final Position (Floating to the left)
                tl.to(ghostImgRef.current, {
                    top: "15%",       // Final Y pos
                    left: "5%",       // Final X pos
                    width: "40vw",    // Final Width
                    height: "60vh",   // Final Height
                    borderRadius: "12px",
                    objectFit: "cover", // Ensure image doesn't stretch weirdly
                    duration: 1.2,
                    ease: "power4.inOut",
                    delay : 0.1
                });

                
            }

            tlRef.current = tl;
            
    }, [rectPos]);

    useEffect(()=>{
        if(!tlRef.current)
            return;
        if(isOverlayOpen)
            tlRef.current.play();
        
    }, [isOverlayOpen])

    const addToRefs = (el) => {
        if (el && !barsRef.current.includes(el)) {
            barsRef.current.push(el);
        }
    };

    const handleClose = () => {
        tlRef.current.reverse();
    };

    return (
        <div ref={containerRef} className="fixed inset-0 w-screen h-screen z-20 flex -translate-y-full">
            
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    ref={addToRefs}
                    className="w-1/5 h-full bg-amber-800 relative pointer-events-auto -translate-y-full" 
                >
                </div>
            ))}

            {selectedProject && (
                <img
                    ref={ghostImgRef}
                    src={selectedProject.img}
                    alt="Project Hero"
                    className="fixed z-35 object-cover shadow-2xl opacity-0" // Start hidden, GSAP makes it visible
                />
            )}

            <div className="flex flex-col w-full h-full absolute z-30">
                <button className="text-white w-fit z-40" onClick={handleClose}><span>X</span> Close</button>
            </div>
        </div>
    );
}