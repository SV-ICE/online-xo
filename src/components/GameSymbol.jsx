import "./../App.css";
import { SYMBOL_X, SYMBOL_O } from "./../constants";
import { ReactComponent as iconO } from "./../assets/icon-o.svg";
import { ReactComponent as iconX } from "./../assets/icon-x.svg";

const GameSymbol = ({ symbol }) => {
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_O) return "symbol--o";
        if (symbol === SYMBOL_X) return "symbol--x";
        return "";
    };

    const SymbolIcon = symbol === SYMBOL_O ? iconO : iconX;

    return (
        <span className={`symbol ${getSymbolClassName(symbol)}`}>
            <SymbolIcon />
        </span>
    );
};

export default GameSymbol;
