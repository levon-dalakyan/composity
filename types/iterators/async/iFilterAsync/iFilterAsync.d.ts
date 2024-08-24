/**
 * Creates a filtering async iterator based on a predicate function.
 * @param {function(any): boolean} predicate - A function that returns true for values to be included.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns a filtering async iterator.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5, 6]; };
 * const evenNumbers = iFilterAsync(x => x % 2 === 0)(numbers());
 * for await (const num of evenNumbers) {
 *   console.log(num);
 * }
 * // Output: 2, 4, 6
 */
export function iFilterAsync(predicate: (arg0: any) => boolean): (arg0: AsyncIterable<any>) => AsyncIterator<any, any, undefined>;
