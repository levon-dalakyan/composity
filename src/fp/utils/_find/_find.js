import { _isArray } from "../_isArray";

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
export function _find(pred, coll) {
    if (_isArray(coll) || typeof coll === "string") {
        for (let i = 0; i <= coll.length; i++) {
            if (pred(coll[i])) {
                return coll[i];
            }
        }

        return undefined;
    }

    if (typeof coll[Symbol.iterator] === "function") {
        const iter = coll[Symbol.iterator]();

        let cur = iter.next();

        while (cur.done === false) {
            if (pred(cur.value)) {
                return cur.value;
            }

            cur = iter.next();
        }

        return undefined;
    }

    throw new TypeError(
        "The coll must be either an array, a string, or an iterable object"
    );
}
