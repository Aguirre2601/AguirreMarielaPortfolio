export default function Button() {
    return (
        <button 
            className="fixed z-50 bottom-8 right-8 inline-flex items-center justify-center gap-2 py-2 px-6 border border-gray-300 rounded-full text-xs md:text-base font-satoshi font-light tracking-wide text-gray-900 transition-colors duration-300 hover:shadow-purple-600 hover:cursor-pointer shadow-lg shadow-gray-100/30 bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 w-fit" 
            onClick={() => window.open('/Mariela_Aguirre_CV.pdf', '_blank')}
        >
            <img className="w-5 h-5 shrink-0" src="./archivo (2).png" alt="Descargar CV" />
            <span className="shrink-0">Descargar CV</span>
        </button>
    );
}