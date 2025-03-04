import AIRevolution from "./AIRevolution";
import React, { useState } from "react";
import ExternalService from "../services/ExternalService";

const elements = Array.from({ length: 32 }, (_, i) => (i + 1).toString());
const colors = ["#793c47", "#ff873f", "#4f4340", "#f9bf71"];

const Home = () => {
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [betAmount, setBetAmount] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState("1");

    const startSpin = () => {
        if (isSpinning) return;

        if (betAmount <= 0 || !ExternalService.placeBet(selectedEvent, betAmount)) {
            alert("Invalid bet or insufficient funds");
            return;
        }

        setIsSpinning(true);

        const sliceAngle = 360 / elements.length; // Angle par tranche
        const randomRotations = 5 + Math.floor(Math.random() * 5); // Rotations aléatoires entre 5 et 10
        const winningIndex = Math.floor(Math.random() * elements.length); // Index gagnant aléatoire
        const winningNumber = elements[winningIndex];

        console.log("Numéro gagnant calculé:", winningNumber);

        // Calculer l'angle exact pour aligner le numéro gagnant au centre de sa section
        const targetRotation =
            (360 - (winningIndex * sliceAngle) - sliceAngle / 2 - 90) % 360;
        const finalRotation = randomRotations * 360 + targetRotation;

        const startTime = Date.now();
        const duration = 4000;

        /**
         * Fonction d'interpolation pour une transition fluide.
         * Utilise une courbe "ease-in-out" pour accélérer au début et ralentir à la fin.
         */
        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Appliquer la courbe d'accélération/décélération
            const easedProgress = easeInOutCubic(progress);
            const currentRotation =
                rotation + (finalRotation - rotation) * easedProgress;

            setRotation(currentRotation);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsSpinning(false);
                ExternalService.resolveBet(winningNumber === selectedEvent);
                alert(`Résultat : ${winningNumber}. Votre solde : ${ExternalService.userData.balance}`);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 relative">
            <AIRevolution />
            <div className="mb-4">
                <label className="text-white">Bet Amount:</label>
                <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(parseInt(e.target.value) || 0)}
                    className="ml-2 p-1 border rounded"
                />
                <label className="text-white ml-4">Choose a number:</label>
                <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)} className="ml-2 p-1 border rounded">
                    {elements.map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <button onClick={startSpin} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Spin
                </button>
            </div>
            <div className="relative flex justify-center items-center">
                <svg viewBox="0 0 400 50" className="absolute top-[0px] left-1/2 transform -translate-x-1/2 rotate-180">
                    <polygon points="190,10 210,10 200,40" fill="gray" stroke="black" strokeWidth="3" />
                </svg>
                <svg viewBox="0 40 400 400" className="w-80 h-80 cursor-pointer">
                    <g
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            transformOrigin: "200px 200px",
                        }}
                    >
                        <circle cx="200" cy="200" r="150" fill="black" stroke="gold" strokeWidth="5" />
                        {elements.map((el, index) => {
                            const sliceAngle = 360 / elements.length;
                            const startAngle = index * sliceAngle;
                            const endAngle = startAngle + sliceAngle;
                            const largeArc = sliceAngle > 180 ? 1 : 0;
                            const x1 = 200 + 150 * Math.cos((startAngle * Math.PI) / 180);
                            const y1 = 200 + 150 * Math.sin((startAngle * Math.PI) / 180);
                            const x2 = 200 + 150 * Math.cos((endAngle * Math.PI) / 180);
                            const y2 = 200 + 150 * Math.sin((endAngle * Math.PI) / 180);

                            return (
                                <g key={index}>
                                    <path
                                        d={`M200,200 L${x1},${y1} A150,150 0 ${largeArc},1 ${x2},${y2} Z`}
                                        fill={colors[index % colors.length]}
                                        stroke="black"
                                    />
                                    <text
                                        x={200 + 100 * Math.cos(((startAngle + sliceAngle / 2) * Math.PI) / 180)}
                                        y={200 + 100 * Math.sin(((startAngle + sliceAngle / 2) * Math.PI) / 180)}
                                        fontSize="20"
                                        fill="white"
                                        textAnchor="middle"
                                        alignmentBaseline="middle"
                                    >
                                        {el}
                                    </text>
                                </g>
                            );
                        })}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Home;
