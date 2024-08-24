/**
 * Finds the first element in a collection that satisfies the predicate function.
 *
 * @function
 * @name _find
 * @param {Function} pred - The predicate function to test elements.
 * @param {Array|string|Iterable} coll - The collection to search.
 * @returns {*} The first element that satisfies the predicate, or undefined if none found.
 * @throws {TypeError} If the collection is not an array, string, or iterable.
 * @description
 * This function searches through an array, string, or iterable and returns the first
 * element that satisfies the given predicate function.
 */
export function _find(pred: Function, coll: any[] | string | Iterable<any>): any;
