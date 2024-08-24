/**
 * Creates an async iterator that yields elements from the beginning of an async iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be taken.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator yielding elements while the predicate is true.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const takeLessThan4 = iTakeWhileAsync(x => x < 4)(numbers());
 * for await (const num of takeLessThan4) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3
 */
export function iTakeWhileAsync(predicate: (arg0: any) => boolean): (arg0: AsyncIterable<any>) => AsyncIterator<any, any, undefined>;
