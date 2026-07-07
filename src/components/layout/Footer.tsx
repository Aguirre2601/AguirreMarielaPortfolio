import React from "react";
import Loader from "@/components/ui/Title/Loader";


export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-2 bg-black items-center p-5">
            <Loader /> 
            <div className=" text-center font-satoshi mx-auto px-6 py-12">
                <span className="text-2xl mb-2 block">✨</span>
                <h3 className="text-2xl text-white-800 mb-2">
                    ¡Gracias por pasar por aquí!
                </h3>
                <p className="text-xl text-white-500 mt-1 max-w-md mx-auto mb-6">
                    Estás a un solo clic de hacer algo grandioso hoy. 
                </p> 
                <p className="text-lg text-white-400 ">
                    2026 — Creado con ❤️ y mucha dedicación. 
                </p>
            </div> 
        </footer>
    );
}