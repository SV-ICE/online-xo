import GameSymbol from "./GameSymbol";

const GameCell = ({ isWinner, onClick, symbol }) => {
    return (
        <button onClick={onClick} className={`cell ${isWinner ? "cell--win" : ""}`}>
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    );
};

export default GameCell;
