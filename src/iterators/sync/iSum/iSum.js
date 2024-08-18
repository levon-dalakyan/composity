import { iReduce } from "../iReduce";

/**
 * Calculates the sum of all numbers in an iterable.
 * @param {Iterable<number>} iterable - The input iterable of numbers.
 * @returns {number} The sum of all numbers in the iterable.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(iSum(numbers)); // 15
 */
export function iSum(iterable) {
    return iReduce((a, b) => a + b, 0)(iterable);
}
