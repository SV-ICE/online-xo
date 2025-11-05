import "./App.css";

const SYMBOL_X = "x";
const SYMBOL_O = "o";

function App() {
    let currentStep = SYMBOL_O;
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_O) return "symbol--o";
        if (symbol === SYMBOL_X) return "symbol--x";
    };

    const cells = [SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, SYMBOL_O, null, SYMBOL_X, null];

    const renderSymbol = (symbol) => {
        return (
            <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
        );
    };

    return (
        <div className="App">
            <div className="game">
                <div className="game-info">
                    <span>Ход:</span>{" "}
                    {renderSymbol(currentStep)}
                </div>
                <div className="game-field">
                    {cells.map((symbol, index) => {
                        return (
                            <button key={index} className="cell">
                                {symbol ? renderSymbol(symbol) : null}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
