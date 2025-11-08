

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameSymbol from "./GameSymbol";
import { symbolVariants } from "./../constants";

const GameCell = ({ isWinner, onClick, symbol }) => {

    return (
        <div onClick={onClick} className={`cell ${isWinner ? "cell--win" : ""}`}>
            <AnimatePresence>
                {symbol ? (
                    <motion.span 
                        key={symbol}
                        variants={symbolVariants}
                        initial="hidden" 
                        animate="visible"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                    >
                        <GameSymbol symbol={symbol} />
                    </motion.span>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default GameCell;