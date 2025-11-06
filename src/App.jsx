import "./App.css";
import GameInfo from "./components/GameInfo";
import GameCell from "./components/GameCell";
import GameControls from "./components/GameControls";
import { useGameState } from "./useGameState";

function App() {
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleReset,
        winnerSymbol,
        isDraw,
    } = useGameState();

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
