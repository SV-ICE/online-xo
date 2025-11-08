import GameSymbol from "./GameSymbol";
import { motion, AnimatePresence } from "framer-motion";
import { symbolVariants } from "./../constants";

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
    if (isDraw) {
        return (
            <div className="game-info">
                <span className="game-status status-result">Ничья</span>
            </div>
        );
    }

    if (winnerSymbol) {
        return (
            <div className="game-info">
                <span className="game-status status-result">
                    <p>Победитель:</p>
                    <AnimatePresence>
                        <motion.span
                            key={winnerSymbol}
                            variants={symbolVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "40px",
                                height: "100%",
                            }}>
                            <GameSymbol symbol={winnerSymbol} />
                        </motion.span>
                    </AnimatePresence>
                </span>
            </div>
        );
    }

    return (
        <div className="game-info">
            <span className="game-status">
                <p>Ход:</p>
                <AnimatePresence>
                    <motion.span
                        key={currentStep}
                        variants={symbolVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "40px",
                            height: "100%",
                        }}>
                        <GameSymbol symbol={currentStep} />
                    </motion.span>
                </AnimatePresence>
            </span>
        </div>
    );
};

export default GameInfo;
