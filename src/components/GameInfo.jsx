import GameSymbol from "./GameSymbol";

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
    if (isDraw) {
        return (
            <div className="game-info">
                <span className="game-status">Ничья</span>
            </div>
        );
    }

    if (winnerSymbol) {
        return (
            <div className="game-info">
                <span className="game-status">
                    Победитель: <GameSymbol symbol={winnerSymbol} />
                </span>
            </div>
        );
    }

    return (
        <div className="game-info">
            <span className="game-status">
                Ход: <GameSymbol symbol={currentStep} />
            </span>
        </div>
    );
};

export default GameInfo;
