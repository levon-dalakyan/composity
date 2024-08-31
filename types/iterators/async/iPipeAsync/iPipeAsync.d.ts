/**
 * Creates an async pipeline of functions that operate on async iterables.
 * The functions are applied from left to right.
 * @param {...function(AsyncIterable): AsyncIterable} fns - The functions to pipeline.
 * @returns {function(AsyncIterable): AsyncIterable} A function that takes an async iterable and returns a new async iterable with all functions applied.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const doubledOdds = iPipeAsync(
 *   iFilterAsync(x => x % 2 !== 0),
 *   iMapAsync(x => x * 2)
 * )(numbers());
 * for await (const num of doubledOdds) {
 *   console.log(num);
 * }
 * // Output: 2, 6, 10
 */
export function iPipeAsync(...fns: ((arg0: AsyncIterable<any>) => AsyncIterable<any>)[]): (arg0: AsyncIterable<any>) => AsyncIterable<any>;
