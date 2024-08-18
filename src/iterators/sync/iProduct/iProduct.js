import { iReduce } from "../iReduce";

/**
 * Calculates the product of all numbers in an iterable.
 * @param {Iterable<number>} iterable - The input iterable of numbers.
 * @returns {number} The product of all numbers in the iterable.
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * console.log(iProduct(numbers)); // 24
 */
export function iProduct(iterable) {
    return iReduce((a, b) => a * b)(iterable);
}
