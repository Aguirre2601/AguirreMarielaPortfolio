import React, { useState } from "react";

export default function MiSeccionContacto() {
    const [copiado, setCopiado] = useState(false);// Estado para controlar el texto del botón
    const emailReal = "Marielaaguirre610@gmail.com";

    const manejarCopiar = () => {
        navigator.clipboard.writeText(emailReal);// Copia el texto al portapapeles del dispositivo
        setCopiado(true);

        setTimeout(() => setCopiado(false), 2500);   // Regresa el texto a su estado original después de 2.5 segundos
    };

    return (
        <p className="text-lg md:text-2xl mb-2 md:mb-4 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi text-center px-2">
            O {" "}
            <button
                onClick={manejarCopiar}
                type="button"
                className="text-celeste hover:underline pointer-events-auto text-lg sm:text-xl font-medium focus:outline-none transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
            >
                {copiado ? (
                    <span className="text-emerald-400 animate-pulse">✨ ¡Copiado con éxito!</span>
                ) : (
                    <span> mi correo electrónico</span>
                )}
            </button>
        </p>
    );
}
