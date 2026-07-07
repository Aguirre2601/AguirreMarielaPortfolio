import React, { useState } from "react";

export default function MiSeccionContacto() {
  const [copiado, setCopiado] = useState(false);
  const emailReal = "Marielaaguirre610@gmail.com";

  const manejarCopiar = () => {
    // 1. Intentar copia directa síncrona mediante API moderna (Evita bloqueos de Safari)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(emailReal)
        .then(() => {
          procesarExito();
        })
        .catch((err) => {
          console.warn("Fallo API nativa, ejecutando respaldo...", err);
          ejecutarRespaldo();
        });
    } else {
      ejecutarRespaldo();
    }
  };

  // Función de respaldo tradicional (funciona siempre)
  const ejecutarRespaldo = () => {
    try {
      const elementoTexto = document.createElement("textarea");
      elementoTexto.value = emailReal;
      elementoTexto.style.position = "absolute";
      elementoTexto.style.left = "-9999px"; // Lo saca totalmente de la vista del usuario
      
      document.body.appendChild(elementoTexto);
      elementoTexto.select();
      elementoTexto.setSelectionRange(0, 99999); // Requerido para compatibilidad móvil activa

      const exito = document.execCommand("copy");
      document.body.removeChild(elementoTexto);

      if (exito) {
        procesarExito();
      } else {
        throw new Error("Comando de copia deshabilitado");
      }
    } catch (err) {
      console.error("Error crítico en copiado:", err);
    }
  };

  const procesarExito = () => {
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <p className="text-lg md:text-2xl mb-2 md:mb-4 text-transparent bg-clip-text bg-linear-to-br from-gray-100 via-gray-400 to-gray-100 font-satoshi text-center px-2">
      O mi correo electrónico:{" "}
      <button
        onClick={manejarCopiar}
        type="button"
        className="text-celeste hover:underline pointer-events-auto text-base sm:text-xl font-medium focus:outline-none transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
      >
        {copiado ? (
          <span className="text-emerald-400 animate-pulse">✨ ¡Copiado con éxito!</span>
        ) : (
          <span>Copiar correo electrónico 📋</span>
        )}
      </button>
    </p>
  );
}

