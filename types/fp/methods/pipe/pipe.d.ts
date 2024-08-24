/**
 * Performs left-to-right function composition.
 * @function
 * @param {...Function} fns - The functions to compose.
 * @returns {Function} A new function that is the composition of the input functions.
 *
 * @example
 * const double = x => x * 2;
 * const addOne = x => x + 1;
 * const doubleAndAddOne = pipe(double, addOne);
 * console.log(doubleAndAddOne(3)); // Output: 7
 */
export function pipe(...fns: Function[]): Function;
