
import { useEffect, useState, useCallback } from "react";
// src/hooks/useTypewriter.ts

interface UseTypewriterOptions {
    words: string[];
    baseTypingSpeed?: number;  // velocidad base en ms
    deletingSpeed?: number;
    pauseAfterType?: number;
    pauseAfterDelete?: number;
    speedVariation?: number;  // ± variación aleatoria por letra (jitter)
    lengthFactor?: number;  // ms extra por cada carácter de la palabra
}

export function useTypewriter({
    words,
    baseTypingSpeed = 80,
    deletingSpeed = 45,
    pauseAfterType = 1500,
    pauseAfterDelete = 60, //corregido 
    speedVariation = 25,   // ± 25ms de aleatoriedad
    lengthFactor = 2,  // palabras largas → un poco más lentas
}: UseTypewriterOptions) {

    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const getTypingDelay = useCallback((word: string): number => {
    // Si word es undefined o null, devolvemos una velocidad base por defecto
    if (!word) return baseTypingSpeed; 

    const lengthPenalty = word.length * lengthFactor;
    const jitter = (Math.random() - 0.5) * 2 * speedVariation;
    return Math.max(40, baseTypingSpeed + lengthPenalty + jitter);
}, [baseTypingSpeed, lengthFactor, speedVariation]);
    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
                if (displayText.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseAfterType);
                }
            } else {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
                if (displayText.length - 1 === 0) {
                    setIsDeleting(false);
                    setTimeout(() => {
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }, pauseAfterDelete);
                }
            }
        }, isDeleting ? deletingSpeed : getTypingDelay(currentWord)); // ← único cambio aquí
        //                                ↑ antes era solo `typingSpeed`

        return () => clearTimeout(timeout);

    }, [displayText, isDeleting, wordIndex, words,
        deletingSpeed, pauseAfterType, pauseAfterDelete, getTypingDelay]);

    return { displayText, wordIndex };
}