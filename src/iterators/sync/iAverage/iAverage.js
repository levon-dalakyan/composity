/**
 * Calculates the average of numeric values in an iterable.
 * @param {Iterable<number>} iterable - The input iterable containing numeric values.
 * @returns {number} The average of the values, or 0 if the iterable is empty.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(iAverage(numbers)); // 3
 */
export function iAverage(iterable) {
    let sum = 0;
    let amount = 0;

    for (const value of iterable) {
        sum += value;
        amount++;
    }

    return amount > 0 ? sum / amount : 0;
}
