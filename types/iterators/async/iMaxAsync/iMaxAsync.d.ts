/**
 * Finds the maximum value in an async iterable of numbers.
 * @param {AsyncIterable<number>} iterable - The input async iterable of numbers.
 * @returns {Promise<number>} A promise that resolves to the maximum value, or -Infinity if the iterable is empty.
 *
 * @example
 * const numbers = async function*() { yield* [3, 1, 4, 1, 5, 9, 2, 6]; };
 * console.log(await iMaxAsync(numbers())); // 9
 */
export function iMaxAsync(iterable: AsyncIterable<number>): Promise<number>;
