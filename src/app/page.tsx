// src/app/page.tsx
import ParticleSphere from '@/components/canvas/ParticleSphere';
import TypewriterHero from '@/components/motion/TypewriterHero';
import { motion, AnimatePresence } from "motion/react";

export default function HomePage() {
    return (
        <>
            {/* Fondo 3D fijo — detrás de todo */}
            <ParticleSphere />

            {/* Tu contenido encima */}
            <main className="relative z-10 pointer-events-none ">
                {/* Hero — primera pantalla */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-8">
                    <TypewriterHero/>
                </section>
                <div className='flex flex-col items-center justify-center text-center px-8'>
                    <h2>Desarrollo web con arquitectura analítica</h2>
                    <p className="tracking-widest font-satoshi max-w-md text-main-text md:text-4xl">
                        Construyo software priorizando la integridad de los datos y la eficiencia del código para resolver desafíos técnicos complejos
                    </p>
                    <div>
                        <button>Trabajemos juntos</button>
                        <button>Proyectos</button>
                    </div>
                    <p className="mt-4 tracking-[0.3em] uppercase font-bebas-neue text-white-500 md:text-lg">
                        Developer · Designer · Builder
                    </p>
                </div>
                {/* Segunda sección — acá la esfera ya está dispersa */}
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí 2</h2>
                </section>
                <section className="h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-light opacity-70">Sobre mí 3</h2>
                </section>

            </main>
        </>
    );
}