import { SYMBOL_X, SYMBOL_O } from "./../constants";

const GameSymbol = ({ symbol }) => {

	const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_O) return "symbol--o";
        if (symbol === SYMBOL_X) return "symbol--x";
		return '';
    };

    return <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>;
};

export default GameSymbol;
