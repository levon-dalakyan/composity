import _ from "../_";
import { _curry1 } from "../../utils";
import { curryN } from "../curryN";

/**
 * Creates a curried version of the provided function.
 * @function
 * @param {Function} fn - The function to curry.
 * @returns {Function} A curried version of the input function.
 *
 * @example
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * console.log(curriedAdd(1)(2)(3)); // Output: 6
 * console.log(curriedAdd(1, 2)(3)); // Output: 6
 * console.log(curriedAdd(1)(2, 3)); // Output: 6
 */
export function curry(fn) {
    return curryN(fn.length, fn);
}
