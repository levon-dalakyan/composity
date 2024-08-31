/**
 * Creates a composition of functions that operate on iterables.
 * The functions are applied from right to left.
 * @param {...function(Iterable): Iterable} fns - The functions to compose.
 * @returns {function(Iterable): Iterable} A function that takes an iterable and returns a new iterable with all functions applied.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const evenSquares = iCompose(
 *   iFilter(x => x % 2 === 0),
 *   iMap(x => x * x)
 * )(numbers);
 * console.log([...evenSquares]); // [4, 16]
 */
export function iCompose(...fns: ((arg0: Iterable<any>) => Iterable<any>)[]): (arg0: Iterable<any>) => Iterable<any>;
