export const SYMBOL_X = "x";
export const SYMBOL_O = "o";

export const symbolVariants = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 1300,
			damping: 25,
		}
	},
};