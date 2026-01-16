import { useState, useLayoutEffect, useRef } from "react";

export default function useMaxViewportHeight() {
  const maxHeightRef = useRef(0);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const getHeight = () =>
      window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    const update = () => {
      const currentHeight = getHeight();

      if (currentHeight > maxHeightRef.current) {
        maxHeightRef.current = currentHeight;
        setMaxHeight(currentHeight);
      }
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", update);
    }

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", update);
      }
    };
  }, []);

  return maxHeight;
}
