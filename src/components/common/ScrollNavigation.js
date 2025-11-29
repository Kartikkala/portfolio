"use client";

import { useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollNavigation() {
    const handleScroll = (direction) => {
        const container = document.getElementById("main-scroll-container");
        if (!container) return;

        const currentScroll = container.scrollTop;
        const windowHeight = window.innerHeight;
        const targetScroll = currentScroll + windowHeight * direction;

        gsap.to(container, {
            scrollTo: { y: targetScroll, autoKill: false },
            duration: 0.8,
            ease: "power2.inOut",
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                handleScroll(-1);
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                handleScroll(1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
            <button
                onClick={() => handleScroll(-1)}
                className="p-4 rounded-full neu-float hover:neu-pressed text-text-muted hover:text-accent transition-all duration-200"
                aria-label="Scroll Up"
            >
                <FaChevronUp size={20} />
            </button>
            <button
                onClick={() => handleScroll(1)}
                className="p-4 rounded-full neu-float hover:neu-pressed text-text-muted hover:text-accent transition-all duration-200"
                aria-label="Scroll Down"
            >
                <FaChevronDown size={20} />
            </button>
        </div>
    );
}
