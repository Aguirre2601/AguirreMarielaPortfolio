import React from 'react';
// Si usas lucide-react, puedes importar estos iconos. 
// Si no, puedes reemplazarlos por SVGs tradicionales o emojis sutiles.
import { MessageSquare, Heart, Compass, CheckCircle2, Award, HelpCircle } from 'lucide-react';

export default function SoftSkills() {
    const skills = [
        {
            icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
            title: "Storytelling",
            desc: "Habilidad para comunicar ideas complejas, hablar en público y explicar procesos técnicos de forma simple."
        },
        {
            icon: <Heart className="w-6 h-6 text-pink-400" />,
            title: "Inteligencia Emocional",
            desc: "Empatía conmigo y con el equipo, manteniendo un entorno de trabajo colaborativo y saludable."
        },
        {
            icon: <Compass className="w-6 h-6 text-cyan-400" />,
            title: "Pensamiento Crítico",
            desc: "Análisis lógico y estructurado de los problemas para la toma de decisiones basada en la organización."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
            title: "Escucha Activa",
            desc: "Atención plena a las necesidades de los usuarios y compañeros para diseñar mejores soluciones."
        },
        {
            icon: <Award className="w-6 h-6 text-amber-400" />,
            title: "Responsabilidad y Orden",
            desc: "Compromiso absoluto con las entregas y una metodología de trabajo sumamente organizada."
        },
        {
            icon: <HelpCircle className="w-6 h-6 text-purple-400" />,
            title: "Orientación al Servicio",
            desc: "Disposición natural para brindar soporte y ayudar de manera proactiva a quien lo requiera."
        }
    ];

    return (
        <div className="w-full max-w-9/10 md:max-w-5xl mx-auto  ">
            {/* Grilla responsiva: 1 columna en móvil, 2 en tablets, 3 en escritorio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-5 rounded-xl bg-mauve-800/10 backdrop-blur-lg  "
                    >
                        {/* Contenedor del Icono con un fondo sutil */}
                        <div className="p-2.5 bg-mauve-900/30 rounded-xl w-fit mb-4 border border-gray-800/20">
                            {skill.icon}
                        </div>

                        {/* Palabra Clave */}
                        <h4 className="mb-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-slate-50 via-gray-400 to-slate-100 font-satoshi text-xs sm:text-xs md:text-2xl   ">
                            {skill.title}
                        </h4>

                        {/* Descripción Breve Técnica */}
                        <p className="text-xs md:text-base text-gray-500 leading-relaxed">
                            {skill.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
