import { useState } from "react";
import "./App.css";
import GameInfo from "./components/GameInfo";
import { SYMBOL_X, SYMBOL_O } from "./constants";
import GameCell from "./components/GameCell";
import GameControls from "./components/GameControls";

const computeWinner = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return [a, b, c];
        }
    }
};

function App() {
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

    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

    const handleReset = () => {
        setCells(Array(9).fill(null));
        setCurrentStep(SYMBOL_O);
        setWinnerSequence(undefined);
    };

    let isDraw = cells.filter(Boolean).length === 9 && !winnerSequence;

    return (
        <div className="App">
            <div className="game">
                <GameInfo
                    isDraw={isDraw}
                    winnerSymbol={winnerSymbol}
                    currentStep={currentStep}
                />
                <div className="game-field">
                    {cells.map((symbol, index) => {
                        return (
                            <GameCell
                                key={index}
                                isWinner={winnerSequence?.includes(index)}
                                onClick={() => handleCellClick(index)}
                                symbol={symbol}
                            />
                        );
                    })}
                </div>
                <GameControls handleReset={handleReset} />
            </div>
        </div>
    );
}

export default App;
