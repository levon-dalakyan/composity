/**
 * Creates an async iterator that prepends multiple iterables to the given iterable.
 * @param {...AsyncIterable} iterables - The iterables to prepend.
 * @returns {function(AsyncIterable): AsyncIterable} A function that takes an async iterable and returns a new async iterable with the prepended values.
 *
 * @example
 * const numbers = async function*() { yield* [3, 4, 5]; };
 * const moreNumbers = async function*() { yield* [1, 2]; };
 * const prependedNumbers = iPrependAsync(moreNumbers())(numbers());
 * for await (const num of prependedNumbers) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3, 4, 5
 */
export function iPrependAsync(...iterables: AsyncIterable<any>[]): (arg0: AsyncIterable<any>) => AsyncIterable<any>;
