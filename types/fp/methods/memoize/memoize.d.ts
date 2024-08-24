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
export const memoize: Function;
