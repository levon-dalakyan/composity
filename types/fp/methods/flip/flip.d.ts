/**
 * Creates a new function that calls the provided function with its arguments reversed.
 * @function
 * @param {Function} fn - The function to flip.
 * @returns {Function} A new function with reversed argument order.
 *
 * @example
 * const subtract = (a, b) => a - b;
 * const flippedSubtract = flip(subtract);
 * console.log(flippedSubtract(3, 7)); // Output: 4 (7 - 3)
 */
export const flip: Function;