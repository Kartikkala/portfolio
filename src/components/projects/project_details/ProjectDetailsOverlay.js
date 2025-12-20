import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { closeProject } from "@/lib/slices/projectSlice";
import AnimatedButton from "@/components/utils/AnimatedButton";

// projectName : string,
// projectDesc : string,
// tagline : string,
// highlight : string,
// tools : array<string>,
// state : boolean
export default function ProjectDetailsOverlay() {
    const { imageId , selectedProject, isOverlayOpen } = useAppSelector((state) => state.project);
    const dispatch = useAppDispatch();
    
    const barsRef = useRef([]); // To store references to the 5 bars
    const containerRef = useRef(null);
    const ghostImgRef = useRef(null);
    const ghostImgFinalPosRef = useRef(null);
    const contentRef = useRef(null);
    const tlRef = useRef(null);

    

    useLayoutEffect(() => {
            if(!isOverlayOpen || !imageId) return;

            const tl = gsap.timeline({
                paused : true,
                onReverseComplete : ()=>{
                    document.body.style.overflow = "";
                    dispatch(closeProject());
                }
            });

            tl
            .to(containerRef.current, {
                y : 0,
                duration : 0.0001 // Set this duration insanely small so that the layout appears instantly
            })
            .to(barsRef.current,
                {
                    y: 0,  
                    duration: 0.5,
                    stagger: 0.1,  
                    ease: "power3.inOut"
                }
            );
            const sourceEl = document.getElementById(imageId);
            const destEl = ghostImgFinalPosRef.current;

            let startRect = { top: 0, left: 0, width: 0, height: 0 };
            let destRect = { top: 0, left: 0, width: 0, height: 0 };
            
            if (sourceEl && destEl) {
                startRect = sourceEl.getBoundingClientRect();
                destRect = destEl.getBoundingClientRect();
            }

            const finalTop = destRect.top + window.innerHeight;
            

            // 2. ANIMATE to Final Position (Floating to the left)
            tl.fromTo(ghostImgRef.current, {
                top: startRect.top,       // Final Y pos
                left: startRect.left,       // Final X pos
                width: startRect.width,    // Final Width
                height: startRect.height,   // Final Height
            },
            {
                top: finalTop,
                left: destRect.left,
                width: destRect.width,
                height: destRect.height,
                borderRadius: "12px",
                duration: 1.2,
                ease: "power4.inOut",
            },
            )
            .to(contentRef.current, {
                opacity : 1,
                duration : 0.6,
                ease : "power2.out"
            }, "<0.3")

            tlRef.current = tl;
            tl.play();
            
    }, [imageId, isOverlayOpen]);

    const addToRefs = (el) => {
        if (el && !barsRef.current.includes(el)) {
            barsRef.current.push(el);
        }
    };

    const handleClose = () => {
        tlRef.current.reverse();
    };

    return (
        <div ref={containerRef} className="fixed inset-0 w-screen h-dvh z-20 flex -translate-y-full">
            
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    ref={addToRefs}
                    className="w-1/5 h-dvh bg-green-800 relative pointer-events-auto -translate-y-full" 
                >
                </div>
            ))}

            {selectedProject && (
                <img
                    ref={ghostImgRef}
                    src={selectedProject.img}
                    alt="Project Hero"
                    className="fixed z-35 object-cover shadow-2xl"
                />
            )}

            <div ref={contentRef} className="flex flex-col w-full h-full absolute z-30 md:p-5 p-2 justify-between text-teal-50 opacity-0">
                <AnimatedButton onClickFn={handleClose} buttonText={"CLOSE"}/>

                {/* Content div */}
                <div id="project_content" className="flex flex-col gap-2">
                    <h1 className="text-[clamp(3rem,7vw,7rem)] font-oswald font-bold leading-none">
                        {selectedProject && (selectedProject.name)}
                    </h1>
                    <div className="flex gap-6">
                        <div className="font-oswald">
                            {selectedProject && (selectedProject.year)}
                        </div>
                        <div>
                            {selectedProject && (selectedProject.tagline)}
                        </div>
                    </div>
                    <div className="flex gap-6 font-oswald">
                        <button className="">
                            Live Link
                        </button>
                        <button>Github Link</button>
                    </div>
                    <div  className="flex md:flex-row flex-col items-end md:gap-8 gap-2">
                        <div ref={ghostImgFinalPosRef} id="img_div" className="md:w-[45vw] md:h-[60vh] w-full h-[20vh]"></div>
                        <div className="flex flex-col md:gap-6 gap-4 md:max-w-1/2">
                            <h2 className="md:text-[clamp(2rem,3vw,3rem)] text-[clamp(1rem,2rem,8rem)] font-oswald">Description</h2>
                            <p className="overflow-auto h-[10em]">{selectedProject && selectedProject.description}</p>
                            <div className="flex">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-oswald text-3xl">Tech Stack</h3>
                                    <div className="">
                                        {selectedProject && (selectedProject.tools.map((tool, idx)=>{
                                            return <div key={idx}>{tool}</div>
                                        }))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}