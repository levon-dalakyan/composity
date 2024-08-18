import { iReduceAsync } from "../iReduceAsync";

/**
 * Calculates the sum of all numbers in an async iterable.
 * @param {AsyncIterable<number>} iterable - The input async iterable of numbers.
 * @returns {Promise<number>} A promise that resolves to the sum of all numbers in the iterable.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * console.log(await iSumAsync(numbers())); // 15
 */
export function iSumAsync(iterable) {
    return iReduceAsync((a, b) => a + b, 0)(iterable);
}
