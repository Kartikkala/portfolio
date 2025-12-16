import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";

export default function Tools({}){
    const textRef = useRef(null);
    const pageRef = useRef(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const text = textRef.current;
        const page = pageRef.current;

        gsap.to(text, {
            x : "-72%",
            scrollTrigger : {
                trigger : page,
                markers : true,
                scrub : 1.3,
                pin : true,
                scroller : "body",
                start : "top 0%",
                end : "top -250%"
            }
        })
    }, [])
    return (
        <div ref={pageRef} className="flex overflow-x-hidden bg-amber-200">
            <h1 ref={textRef} className="text-[32vw] text-nowrap">
                Choko-Eating Ceremony
            </h1>
        </div>
    )
}