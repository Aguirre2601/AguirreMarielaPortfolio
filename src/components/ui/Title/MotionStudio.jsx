"use client";
import  ScrollTicker  from './ScrollTicker';

export default function MotionStudio() {

    const wordsList = ["Code","Systems","Projects","Software","Development","Solutions"];

    return (
    <div style={{ color: "#daf4fe",  paddingBottom: "10vh" , paddingTop: "10vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ScrollTicker words={wordsList} reverse={false} />
            <ScrollTicker words={wordsList} reverse={true} />
            <ScrollTicker words={wordsList} reverse={false} />
        </div>
    </div>
    );
}
