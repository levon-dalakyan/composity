/**
 * Converts an async iterable to an array.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {Promise<Array>} A promise that resolves to an array containing all elements from the async iterable.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3]; };
 * console.log(await iToArrayAsync(numbers())); // [1, 2, 3]
 */
export function iToArrayAsync(iterable: AsyncIterable<any>): Promise<any[]>;
