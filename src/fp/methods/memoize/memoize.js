import { _curry1 } from "../../utils";

/**
 * Creates a new function that memoizes (caches) the result of a given function.
 * @function
 * @param {Function} fn - The function to memoize.
 * @returns {Function} A new memoized function.
 *
 * @example
 * const expensiveOperation = memoize(x => {
 *   console.log('Computing...');
 *   return x * 2;
 * });
 * console.log(expensiveOperation(4)); // Logs: Computing... Output: 8
 * console.log(expensiveOperation(4)); // Output: 8 (no log, result from cache)
 */
export const memoize = _curry1(function (fn) {
    const cashe = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (!cashe.hasOwnProperty(key)) {
            cashe[key] = fn.apply(this, args);
        }

        return cashe[key];
    };
});
