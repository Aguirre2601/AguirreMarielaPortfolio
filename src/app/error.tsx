'use client';

// tus imports actuales
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Loguea el error para debugging
        console.error('Error en la aplicación:', error);
    }, [error]);

    return (    
        <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            <h1 className="text-4xl font-bold mb-4">¡Ups! Algo salió mal.</h1>
            <p className="mb-6 text-center">
                Lo sentimos, ocurrió un error inesperado. Por favor, intenta recargar la página.
            </p>
            <button
                onClick={reset}
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
            >
                Recargar
            </button>
        </div>
    );
}