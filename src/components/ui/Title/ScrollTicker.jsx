"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTicker({ words, reverse = false }) {
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll();// 1. Detectamos el scroll de toda la página
        const xTransform = useTransform(
            scrollYProgress, [0, 1],  reverse ? ["-30%", "0%"] : ["0%", "-30%"]
        );
        const duplicatedWords = [...words, ...words, ...words, ...words];

      
  return (
    <div 
      ref={containerRef} 
      style={{ overflow: "hidden", display: "flex", whiteSpace: "nowrap", padding: "1rem 0" }}
    >
      <motion.div 
        style={{ x: xTransform, display: "flex", gap: "2rem" }}
      >
        {duplicatedWords.map((word, idx) => {
          const  useAlternativeFont  = idx % 2 !== 0;

          return (
             <span 
              key={idx}  
              className= {`
                        text-3xl         
                        md:text-6xl       
                        lg:text-8xl     
                        uppercase 
                        text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100
                        ${useAlternativeFont ? "font-ArraySemiBold" : "font-satoshi"}
                    `}
              style={{  }}
            >
              {word}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}