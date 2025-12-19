import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function AnimatedButton({buttonText, onClickFn}){
    const buttonRef = useRef(null);
    const tlRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({paused : true});

        tl.to(".char", {
            yPercent : -100,
            duration : 0.2,
            stagger : 0.015,
            ease : "power2.inOut"
        });

        tlRef.current = tl;
    }, [tlRef.current])

    const handleMouseEnter = () => {
        tlRef.current?.play();
    };

    const handleMouseLeave = () => {
        tlRef.current?.reverse();
    };

    return (
    <button 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    ref={buttonRef} className="text-white font-oswald border border-white p-1 overflow-hidden w-fit" onClick={onClickFn}>
        <div className="h-[2rem] flex flex-col overflow-hidden">
            <div className="flex">
                {buttonText && 
                buttonText.split('').map((character, idx)=>{
                    return <span className="char inline-block" key={idx}>{character}</span>
                })}
            </div>
            <div className="flex">
                {buttonText && 
                buttonText.split('').map((character, idx)=>{
                    const ref = useRef(null);
                    return <span className="char inline-block" key={idx}>{character}</span>
                })}
            </div>
            
        </div>
    </button>
    );
}