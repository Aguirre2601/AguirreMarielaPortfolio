import { useEffect, useState } from 'react';
import GlowText from '../GlowText';
import SvgGrid from './SvgGrid';
import {ImgBackend} from '@/constants/ImgBackend';
import {ImgFrontend} from '@/constants/ImgFrontend';
import {ImgTools} from '@/constants/ImgTool';

export default function Grid() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            const AOS = require('aos');
            AOS.init({
                duration: 1000,  // delay para asegurar que el DOM esté estable
                once: true,
                mirror: false,
                startEvent: 'DOMContentLoaded', // Esta opción ayuda a que AOS no oculte cosas que ya deberían verse
            });
            AOS.refresh();
        }, 100); // 100ms es imperceptible para el usuario pero vital para el código

        return () => clearTimeout(timer); // Limpieza de memoria
    }, []);
    return (
        <div className="grid  gap-4 grid-cols-3 ">
            <div className="col-span-2 rounded-xl p-2 md:p-6 bg-linear-65 from-mauve-950 to-neutral-900 border border-neutral-800  " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-base md:text-3xl m-2 font-semibold text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi  flex flex-row">Hola! soy<GlowText text="Mariela" />.</h2> 
                <h3 className="text-sm md:text-2xl m-2 font-medium text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi">Tengo 24 años y vivo en Buenos Aires, Argentina.</h3>
                <p className="text-xs md:text-xl m-2 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi font-normal">Busco entender la lógica detrás de lo que solemos dar por sentado. Combino la investigación constante con una rutina activa: correr, tocar el piano y meditar son mis herramientas para mantener el equilibrio entre mente y cuerpo.</p>
            </div>


            <div className="row-span-2 rounded-xl p-2 md:p-6 bg-linear-65 to-mauve-950 from-neutral-900 border border-neutral-800 " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-base md:text-3xl m-2 font-semibold font-satoshi  flex flex-row   text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100">Lenguajes de <GlowText text="Frontend" /></h2> 
                <SvgGrid images={ImgFrontend}/>
            </div>

            <div className="row-span-2  rounded-xl p-2 md:p-6 bg-linear-65 to-mauve-950 from-neutral-900 border border-neutral-800 " data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-base md:text-3xl m-2 font-semibold font-satoshi  flex flex-row   text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100">Lenguajes de <GlowText text="Backend" /></h2> 
                <SvgGrid images={ImgBackend} />
                
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700" data-aos={isMounted ? "fade-up" : undefined}>
                <span className="text-slate-400">FOTO</span>
            </div>
            <div className="col-span-2 bg-linear-to-r from-violet-600 to-indigo-600 rounded-xl p-6" data-aos={isMounted ? "fade-up" : undefined}>
                <h2 className="text-base md:text-3xl m-2 font-semibold font-satoshi  flex flex-row   text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100">Mis  <GlowText text="Tools" /></h2> 
                <SvgGrid images={ImgTools} />
            </div>

        </div>
    );
}