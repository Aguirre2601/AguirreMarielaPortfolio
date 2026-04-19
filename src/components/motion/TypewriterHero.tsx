"use client";
import { useTypewriter } from "@/hooks/use-type-writer";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";


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

// ─── Componente principal ─────────────────────────────────────────────────────
export default function TypewriterHero({
    words = DEFAULT_WORDS,
}: TypewriterHeroProps) {
    const { displayText, wordIndex } = useTypewriter({ words });

    return (
        <section className="flex min-h-screen flex-col items-right justify-center px-4 text-right">
            {/* Entrada suave de toda la sección */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-right gap-5"
            >
                {/* Etiqueta superior */}
                {/* <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-base uppercase tracking-widest font-outfit font-semibold text-transparent bg-clip-text bg-linear-to-br from-white via-gray-200 to-white "
                >
                    Portfolio | Aguirre Mariela
                </motion.span>*/ }

                {/* Titular principal */}
                <h2 className="flex flex-wrap items-right justify-items-normal gap-x-3 font-normal leading-none tracking-tight md:text-3xl">
                    <span className="text-foreground font-outfit font-semibold text-transparent bg-clip-text bg-linear-to-br from-white via-gray-300 to-white">Hola, yo soy</span>
                </h2>
                <h1 className="flex flex-wrap items-right justify-right gap-x-3 text-5xl font-medium leading-none tracking-tight md:text-7xl">
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

                        {/* Cursor parpadeante */}
                        <motion.span
                            className="ml-0.5 inline-block h-[0.85em] w-0.75 bg-violet-500 align-middle"
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                repeatType: "loop",
                                times: [0, 0.5, 0.5, 1],
                            }}
                            aria-hidden="true"
                        />
                    </span>

                </h1>



                {/* Indicadores de palabra actual */}
                { /*  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-2"
                    aria-hidden="true"
                >
                    {words.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${i === wordIndex ? "bg-violet-500" : "bg-neutral-300"
                                }`}
                        />
                    ))}
                </motion.div> */}
                <motion.div>
                    <h3 className="mt-5 tracking-[0.3em] px-1 py-0.7 uppercase md:text-base font-normal font-outfit backdrop-blur-2xl backdrop-brightness-75 text-transparent bg-clip-text bg-linear-to-br from-white via-gray-200 to-white ">Full Stack Developer | Data Analyst | Data Science Student </h3>
                </motion.div>
            </motion.div>
        </section>
    );
}