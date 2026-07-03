import { useState } from "react";

const KEYFRAMES = `
  @keyframes gradientShift {
    0%   { background-position: 0% center; }
    100% { background-position: 300% center; }
  }
`;

function GlowWord({ word }) {
  const [hovered, setHovered] = useState(true);

  return (
    <span onMouseEnter={() => setHovered(false)}  onMouseLeave={() => setHovered(true)}
      className={hovered ? "glow-word--active" : "glow-word"}
    >
      {word}
    </span>
  );
}

export default function GlowText({ text = "" }) {
  const words = text.trim().split(/\s+/);

  return (
    <>
      <style>{`
        ${KEYFRAMES}

        .glow-word,
        .glow-word--active {
          display: inline;
          letter-spacing: -0.02em;
          cursor: default;
          transition: filter 0.3s ease;
        }

        .glow-word {
          color: inherit;
        }

        .glow-word--active {
          background-image: linear-gradient(
            70deg,
            #FFFFFF, #B5B5B5,#D9D9D9, #D9D9D9, #B5B5B5, #FFFFFF
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6.5s linear infinite;
          filter:
            drop-shadow(0 0 0px  #FFFFFF)
            drop-shadow(0 0 7px #AEAEAE)
            drop-shadow(0 0 20px #D9D9D9);
        }
      `}</style>

      <div
        style={{
          justifyContent: "center",
          userSelect: "none",
          margin: "0 0 0 0.3em",
        }}
      >
        {words.map((word, i) => (
          <GlowWord key={i} word={word} />
        ))}
      </div>
    </>
  );
}