/**
 * Converts an iterable to an array.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Array} An array containing all elements from the iterable.
 *
 * @example
 * const set = new Set([1, 2, 3]);
 * console.log(iToArray(set)); // [1, 2, 3]
 */
export function iToArray(iterable) {
    return [...iterable];
}
