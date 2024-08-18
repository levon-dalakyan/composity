/**
 * Finds the maximum value in an iterable of numbers.
 * @param {Iterable<number>} iterable - The input iterable of numbers.
 * @returns {number} The maximum value, or -Infinity if the iterable is empty.
 *
 * @example
 * const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
 * console.log(iMax(numbers)); // 9
 */
export function iMax(iterable) {
    let max = -Infinity;

    for (const value of iterable) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}
