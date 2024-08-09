import { _curry2, _find } from "../utils";

/**
 * Tests whether at least one element in the collection satisfies the predicate.
 * @function
 * @param {Function} pred - The predicate function to test with.
 * @param {Array} coll - The collection to iterate over.
 * @returns {boolean} True if at least one element satisfies the predicate, false otherwise.
 *
 * @example
 * const isEven = x => x % 2 === 0;
 * console.log(some(isEven, [1, 3, 5, 6, 7])); // Output: true
 * console.log(some(isEven, [1, 3, 5, 7])); // Output: false
 */
export const some = _curry2(function (pred, coll) {
    return _find(pred, coll) !== undefined;
});
