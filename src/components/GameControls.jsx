const GameControls = ({ handleReset }) => {
    return (
        <div className="game-controls">
            <button className="game-reset" onClick={handleReset}>
                Сбросить
            </button>
        </div>
    );
};

export default GameControls;