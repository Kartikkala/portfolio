import { useState } from "react";
import RisingAnimation from "./RisingAnimation";

// Make the animation a seperate component and the button a seperate component.

export default function AnimatedButton({buttonText, onClickFn}){
    const [trigger, changeTriggerState] = useState(false);

    const handleMouseEnter = () => {
        changeTriggerState(true);
    };

    const handleMouseLeave = () => {
        changeTriggerState(false);
    };

    return (
    <button 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="text-white font-oswald border border-white p-1 overflow-hidden w-fit cursor-pointer" onClick={()=>{
        changeTriggerState(true);
        setTimeout(()=>{
            changeTriggerState(false);
        }, 2000)
        onClickFn();
    }}>
        <RisingAnimation text={buttonText} trigger={trigger}/>
    </button>
    );
}