import { _curry1, _curry2, _curryN, _arify } from "../utils";

/**
 * Creates a curried version of the provided function with a specified arity.
 * @function
 * @param {number} length - The arity of the curried function.
 * @param {Function} fn - The function to curry.
 * @returns {Function} A curried version of the input function with the specified arity.
 *
 * @example
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curryN(3, add);
 * console.log(curriedAdd(1)(2)(3)); // Output: 6
 * console.log(curriedAdd(1, 2)(3)); // Output: 6
 * console.log(curriedAdd(1)(2, 3)); // Output: 6
 */
export const curryN = _curry2(function curryN(length, fn) {
    if (length === 1) {
        return _curry1(fn);
    }

    return _arify(length, _curryN(length, [], fn));
});
