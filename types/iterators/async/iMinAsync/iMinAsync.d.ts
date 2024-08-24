/**
 * Finds the minimum value in an async iterable of numbers.
 * @param {AsyncIterable<number>} iterable - The input async iterable of numbers.
 * @returns {Promise<number>} A promise that resolves to the minimum value, or Infinity if the iterable is empty.
 *
 * @example
 * const numbers = async function*() { yield* [3, 1, 4, 1, 5, 9, 2, 6]; };
 * console.log(await iMinAsync(numbers())); // 1
 */
export function iMinAsync(iterable: AsyncIterable<number>): Promise<number>;
