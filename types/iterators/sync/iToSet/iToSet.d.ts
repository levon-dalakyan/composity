/**
 * Converts an iterable to a Set.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Set} A Set containing all unique elements from the iterable.
 *
 * @example
 * const numbers = [1, 2, 2, 3, 3, 3];
 * console.log(iToSet(numbers)); // Set(3) { 1, 2, 3 }
 */
export function iToSet(iterable: Iterable<any>): Set<any>;
