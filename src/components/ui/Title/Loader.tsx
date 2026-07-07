import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="card w-full flex justify-center items-center min-h-1/2 md:min-h-1/2">
                {/* Controlamos la altura del loader de forma responsiva con h-12 en móvil y h-32 en escritorio */}
                <div className="loader h-12 md:h-32 items-center">
                    <p className="font-satoshi text-3xl sm:text-4xl md:text-7xl pr-2 md:pr-4 m-0 flex items-center">
                        Se
                    </p>
                    <div className="words">
                        <span className="word font-ArraySemiBold text-3xl sm:text-4xl md:text-7xl">Imaginaitvo</span>
                        <span className="word font-ArraySemiBold text-3xl sm:text-4xl md:text-7xl">Creativo</span>
                        <span className="word font-ArraySemiBold text-3xl sm:text-4xl md:text-7xl">Ingenioso</span>
                        <span className="word font-ArraySemiBold text-3xl sm:text-4xl md:text-7xl">Cursioso</span>
                        <span className="word font-ArraySemiBold text-3xl sm:text-4xl md:text-7xl">Motivado</span>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        background-color: #000000; 
    }
    
    .loader {
        color: rgb(124, 124, 124);
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        box-sizing: content-box;
        display: flex; 
    }

    .words {
        overflow: hidden;
        position: relative;
        height: 100%; /* Asegura que tome la altura responsiva (h-12 o h-32) del padre */
    }
    
    .words::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            #000000 0%,
            transparent 25%,
            transparent 75%,
            #000000 100%
        );
        z-index: 20;
    }

    .word {
        display: flex;
        align-items: center; /* Centra el texto verticalmente en móviles */
        height: 100%; /* Ocupa exactamente el alto disponible */
        color: #956afa;
        animation: spin_4991 15s infinite;
    }

    @keyframes spin_4991 {
        10% { transform: translateY(-100%); }
        25% { transform: translateY(-100%); }
        35% { transform: translateY(-200%); }
        50% { transform: translateY(-200%); }
        60% { transform: translateY(-300%); }
        75% { transform: translateY(-300%); }
        85% { transform: translateY(-400%); }
        100% { transform: translateY(-400%); }
    }
`;

export default Loader;
