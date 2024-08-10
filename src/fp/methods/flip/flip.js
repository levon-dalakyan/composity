import { curryN } from "../curryN";
import { _reverseArray, _curry1 } from "../../utils";

/**
 * Creates a new function that calls the provided function with its arguments reversed.
 * @function
 * @param {Function} fn - The function to flip.
 * @returns {Function} A new function with reversed argument order.
 *
 * @example
 * const subtract = (a, b) => a - b;
 * const flippedSubtract = flip(subtract);
 * console.log(flippedSubtract(3, 7)); // Output: 4 (7 - 3)
 */
export const flip = _curry1(function (fn) {
    return curryN(fn.length, function (...args) {
        return fn.apply(this, _reverseArray(args));
    });
});
