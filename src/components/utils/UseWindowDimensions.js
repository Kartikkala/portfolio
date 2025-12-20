import { useState, useLayoutEffect } from "react";

export default function useWindowDimensions() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        // Function to update state
        const update = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // 1. Initial Call
        update();

        // 2. The Listeners
        window.addEventListener("resize", ()=>{
            update();
        });
        window.addEventListener("orientationchange", update);
        

        return () => {
            window.removeEventListener("resize", update);
            window.removeEventListener("orientationchange", update);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener("resize", update);
            }
        };
    }, []);

    return dimensions;
}