// src/app/page.tsx
import ParticleSphere from '@/components/canvas/ParticleSphere';

export default function HomePage() {
    return (
        <>
            {/* Fondo 3D fijo — detrás de todo */}
            <ParticleSphere />

            {/* Tu contenido encima */}
            <main className="relative z-10 text-white pointer-events-none">

                {/* Hero — primera pantalla */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-8">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest">
                        Tu Nombre
                    </h1>
                    <p className="mt-4 text-sm tracking-[0.3em] opacity-40 uppercase">
                        Developer · Designer · Builder
                    </p>
                </section>

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