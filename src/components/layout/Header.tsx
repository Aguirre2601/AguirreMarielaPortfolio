"use client";
import { useState, useEffect, useRef } from 'react';

import Link from "next/link";
import Button from "@/components/ui/Button";

// Cada link ahora tiene un "variant" que decide cómo se renderiza
type NavLink = {
    label: string;
    href: string;
    variant: "link" | "magic";
};

const navLinks: NavLink[] = [
    { label: "Inicio", href: "#inicio", variant: "link" },
    { label: "Proyectos", href: "#proyectos", variant: "magic" },
    { label: "Sobre mí", href: "#sobre-mi", variant: "link" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lastY = useRef(0); // Usamos useRef para persistir el valor entre renders

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            
            // 1. Lógica de visibilidad (solo actualiza si el estado cambia)
            const isMovingUp = currentY < lastY.current || currentY < 20;
            if (isMovingUp !== visible) {
                setVisible(isMovingUp);
            }

            // 2. Lógica de fondo/sombra (scrolled)
            const isScrolled = currentY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            lastY.current = currentY; // Actualizamos la referencia
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visible, scrolled]); // Dependencias para que la función vea los estados actuales



    
    return (
        // Contenedor exterior: ocupa todo el ancho pero solo para posicionar
        <div
            className={` bg-sky-700
        fixed  left-0 right-0 z-50
        flex justify-center              
        transition-transform duration-300
        ${visible ? "translate-y-5" : "-translate-y-[130%]"}
      `}
        >
            {/* 
        La "píldora" — no ocupa todo el ancho.
        inline-flex hace que el ancho se ajuste a su contenido.
      */}
            <header
                className={`
                        inline-flex items-center gap-12
                        px-6 py-3
                        rounded-full
                        border border-zinc-200 dark:border-zinc-700
                        transition-colors duration-300
                        ${scrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm" : "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm"}
        `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="font-bold text-md tracking-tight text-zinc-900 dark:text-white "
                >
                    AG {/* ← reemplazá con tu nombre/logo */}
                </Link>
                <div className="w-px h-5 bg-zinc-700" />
                {/* Nav — desktop */}
                <nav className="hidden md:flex items-center gap-6 ">
                    {navLinks.map((link) =>
                        link.variant === "magic" ? (
                            // Link con estilo Button magic
                            <Button key={link.href} className="">
                                <Link href={link.href} >{link.label}</Link>
                            </Button>
                        ) : (
                            // Link normal
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg hover:to-blue-500  text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Separador visual */}
                <div className="hidden md:block w-px h-4 bg-zinc-200 dark:bg-zinc-700" />

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDark(!dark)}
                    aria-label="Cambiar modo de color"
                    className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-lg"
                >
                    {dark ? "☀️" : "🌙"}
                </button>

                {/* CTA */}
                <Link
                    href="#contacto"
                    className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium hover:opacity-80 transition-opacity"
                >
                    Contactame
                </Link>

                {/* Hamburguesa mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                    className="md:hidden p-1.5 rounded-md text-zinc-600 dark:text-zinc-300"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </header>

            {/* Menú mobile — debajo de la píldora */}
            {menuOpen && (
                <div className="absolute top-14 left-4 right-4 md:hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 flex flex-col gap-14 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg text-zinc-700 dark:text-zinc-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 text-center px-4 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium"
                    >
                        Contactame
                    </Link>
                </div>
            )}
        </div>
    );
}