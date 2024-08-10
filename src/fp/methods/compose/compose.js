import { _reduce } from "../../utils";
import { reverse } from "../../reverse";

/**
 * Composes multiple functions into a single function, applying them from right to left.
 * @function
 * @param {...Function} fns - The functions to compose.
 * @returns {Function} A new function that is the composition of the input functions.
 *
 * @example
 * const double = x => x * 2;
 * const addOne = x => x + 1;
 * const doubleThenAddOne = compose(addOne, double);
 * console.log(doubleThenAddOne(3)); // Output: 7
 */
export function compose(...fns) {
    return function (arg) {
        return _reduce((v, fn) => fn(v), arg, reverse(fns));
    };
}
