// hooks/use-scroll-direction.ts
import { useState, useEffect } from "react";

export function useScrollDirection() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;

            // Si scrollea hacia abajo y pasó los 50px, oculta. Si sube, muestra.
            if (scrollY > lastScrollY && scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(scrollY);
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, [lastScrollY]);

    return isVisible;
}
