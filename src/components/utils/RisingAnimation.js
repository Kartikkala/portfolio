import gsap from "gsap";
import { useRef, useEffect } from "react";
// Text : string
// Trigger (optional boolean)
export default function RisingAnimation({text, trigger, onClick, className, secondaryText, duration}){
    const tlRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({paused : true});
            tl.to(".char", {
                yPercent : -100,
                duration : duration || 0.2,
                stagger : 0.015,
                ease : "power2.inOut"
            });
    
            tlRef.current = tl;
        }, containerRef)

    }, [])

    useEffect(()=>{
        if(typeof trigger === "boolean"){
                if(trigger)
                    tlRef.current?.play()
                else if(!trigger)
                    tlRef.current?.reverse()
            }
    }, [trigger])

    const handleMouseEnter = () => {
        tlRef.current?.play();
    };

    const handleMouseLeave = () => {
        tlRef.current?.reverse();
    };

    const isHoverable = typeof trigger === "undefined";

    return (
        <div
        ref={containerRef}
        onMouseEnter={isHoverable ? handleMouseEnter : undefined} 
        onMouseLeave={isHoverable ? handleMouseLeave : undefined}
        onClick={onClick ? onClick : undefined}
        className={`${typeof className === "string" ? className : "h-[2em]"} flex flex-col overflow-hidden`}>
                    <div className="flex">
                        {text && 
                        text.split('').map((character, idx)=>{
                            return <span className="char inline-block" key={idx}>{character === " " ? "\u00A0" : character}</span>
                        })}
                    </div>
                    <div className="flex">
                        {secondaryText ? secondaryText.split('').map((character, idx)=>{
                            return <span className="char inline-block" key={idx}>{character === " " ? "\u00A0" : character}</span>
                        }):
                        text && 
                        text.split('').map((character, idx)=>{
                            return <span className="char inline-block" key={idx}>{character === " " ? "\u00A0" : character}</span>
                        })
                        }
                    </div>
                    
        </div>
    )
}