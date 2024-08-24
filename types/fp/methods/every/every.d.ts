/**
 * Checks if all elements in the collection satisfy the predicate.
 * @function
 * @param {Function} pred - The predicate function to test each element.
 * @param {Array} coll - The collection to iterate over.
 * @returns {boolean} True if all elements satisfy the predicate, false otherwise.
 *
 * @example
 * const isEven = x => x % 2 === 0;
 * console.log(every(isEven, [2, 4, 6, 8])); // Output: true
 * console.log(every(isEven, [2, 4, 5, 8])); // Output: false
 */
export const every: Function;
