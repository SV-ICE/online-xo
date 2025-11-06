import { useState } from "react";
import { SYMBOL_X, SYMBOL_O } from "./constants";
import { computeWinner } from "./computeWinner";

export const useGameState = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentStep, setCurrentStep] = useState(SYMBOL_O);
    const [winnerSequence, setWinnerSequence] = useState(null);

    const handleCellClick = (index) => {
        if (cells[index] || winnerSequence) return;

        const newCells = [...cells];
        newCells[index] = currentStep;

        const winner = computeWinner(newCells);

        setCells(newCells);
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
        setWinnerSequence(winner);
    };

    const handleReset = () => {
        setCells(Array(9).fill(null));
        setCurrentStep(SYMBOL_O);
        setWinnerSequence(undefined);
    };

    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
    let isDraw = cells.filter(Boolean).length === 9 && !winnerSequence;

    return {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleReset,
        winnerSymbol,
        isDraw,
    };
};
