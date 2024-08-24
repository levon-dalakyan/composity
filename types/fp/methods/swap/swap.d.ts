/**
 * Swaps two elements in an array, object, or string.
 * @function
 * @param {number|string} idx1 - The first index or key.
 * @param {number|string} idx2 - The second index or key.
 * @param {Array|Object|string} obj - The collection to perform the swap on.
 * @returns {Array|Object|string} A new collection with the elements swapped.
 *
 * @example
 * console.log(swap(0, 2, [1, 2, 3])); // Output: [3, 2, 1]
 * console.log(swap("a", "b", {a: 1, b: 2, c: 3})); // Output: {a: 2, b: 1, c: 3}
 * console.log(swap(0, 2, "abc")); // Output: "cba"
 */
export const swap: Function;
