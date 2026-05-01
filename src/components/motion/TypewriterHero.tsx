"use client";
import { useTypewriter } from "@/hooks/use-type-writer";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Buttons/ButtonMagic";


// ─── Tipos ───────────────────────────────────────────────────────────────────
interface TypewriterHeroProps {
    /** Palabras que rotan en el efecto typewriter */
    words?: string[];
    /** Velocidad de escritura en ms por carácter */
    typingSpeed?: number;
    /** Velocidad de borrado en ms por carácter */
    deletingSpeed?: number;
    /** Pausa al terminar de escribir (ms) */
    pauseAfterType?: number;
    /** Pausa al terminar de borrar (ms) */
    pauseAfterDelete?: number;
}

// ─── Constantes por defecto 
// "desarrollando",
//    "investigando",
//    "consturyendo",
//    "innovadondo",
//    "diseñando",───────────────────────────────────────────────────
const DEFAULT_WORDS = [
    "Mariela Aguirre."
];

export default function TypewriterHero({
    words = DEFAULT_WORDS,
}: TypewriterHeroProps) {
    const { displayText, wordIndex } = useTypewriter({ words });

    return (
        <section className="flex flex-col gap-5 items-start ">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className=" "
            >
                {/* Titular principal */}
                <h2 className="leading-none tracking-tight backdrop-blur-sm backdrop-brightness-75 rounded-full w-fit ">
                    <span className="text-foreground font-satoshi font-semibold   text-transparent bg-clip-text bg-linear-to-br from-white via-gray-300 to-white px-3 py-1.5 rounded-full text-sm md:text-lg lg:text-xl ">Hola, yo soy</span>
                </h2>
                <h1 className="font-medium leading-none tracking-tight lg:text-7xl md:text-6xl text-4xl px-3">
                    {/* Contenedor del texto animado */}
                    <span className="relative flex items-baseline">
                        <motion.span
                            key={displayText}
                            className = "text-purple font-ArraySemiBold"
                            aria-live="polite"
                            aria-label={`${words[wordIndex]}`}
                        >
                            {displayText}
                        </motion.span>
                        <div className="overflow-hidden h-10 md:h-20">
                        {/* Cursor parpadeante */}
                        <motion.span
                            className="inline-block h-0.98em w-0.75 overflow-hidden bg-violet-500 align-middle"
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                repeatType: "loop",
                                times: [0, 0.5, 0.5, 1],
                            }}
                            aria-hidden="true"
                        />
                        </div>
                    </span>
                </h1>
                <motion.div>
                    <h3 className="tracking-[0.2em] px-3 py-1.5 font-semibold font-satoshi backdrop-blur-sm backdrop-brightness-75
                    text-transparent bg-clip-text bg-linear-to-br from-white via-gray-200 to-white rounded-full normal-case text-sm  md:uppercase md:text-sm lg:text-base  ">Full Stack Developer | Data Analyst | Data Science Student </h3>
                </motion.div>
                <motion.div className="mt-3 px-2 py-1 font-semibold font-satoshi backdrop-blur-sm backdrop-brightness-75
                    text-transparent bg-clip-text bg-linear-to-br from-white via-gray-200 to-white rounded-full w-fit text-xs md:text-sm lg:text-base ">
                    <p>Disponible para trabajar</p>
                </motion.div>
            </motion.div>
        </section>
    );
}