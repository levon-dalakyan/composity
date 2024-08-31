/**
 * Creates an async composition of functions that operate on async iterables.
 * The functions are applied from right to left.
 * @param {...function(AsyncIterable): AsyncIterable} fns - The functions to compose.
 * @returns {function(AsyncIterable): AsyncIterable} A function that takes an async iterable and returns a new async iterable with all functions applied.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const evenSquares = iComposeAsync(
 *   iFilterAsync(x => x % 2 === 0),
 *   iMapAsync(x => x * x)
 * )(numbers());
 * for await (const num of evenSquares) {
 *   console.log(num);
 * }
 * // Output: 4, 16
 */
export function iComposeAsync(...fns: ((arg0: AsyncIterable<any>) => AsyncIterable<any>)[]): (arg0: AsyncIterable<any>) => AsyncIterable<any>;
