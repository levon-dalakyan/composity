import { _curry2, _find } from "../../utils";

/**
 * Finds the first element in the collection satisfying the predicate.
 * @function
 * @param {Function} pred - The predicate function to test with.
 * @param {Array} coll - The collection to search.
 * @returns {*} The first element that satisfies the predicate, or undefined.
 *
 * @example
 * const isEven = x => x % 2 === 0;
 * console.log(find(isEven, [1, 3, 4, 5])); // Output: 4
 */
export const find = _curry2(function (pred, coll) {
    return _find(pred, coll);
});
