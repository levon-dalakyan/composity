import { iReduceAsync } from "../iReduceAsync";

/**
 * Calculates the product of all numbers in an async iterable.
 * @param {AsyncIterable<number>} iterable - The input async iterable of numbers.
 * @returns {Promise<number>} A promise that resolves to the product of all numbers in the iterable.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4]; };
 * console.log(await iProductAsync(numbers())); // 24
 */
export function iProductAsync(iterable) {
    return iReduceAsync((a, b) => a * b)(iterable);
}
