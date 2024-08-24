/**
 * Calculates the average of numeric values in an async iterable.
 * @param {AsyncIterable<number>} iterable - The input async iterable containing numeric values.
 * @returns {Promise<number>} A promise that resolves to the average of the values, or 0 if the iterable is empty.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * console.log(await iAverageAsync(numbers())); // 3
 */
export function iAverageAsync(iterable: AsyncIterable<number>): Promise<number>;
