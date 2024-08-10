import { _curry1, _isArray } from "../../utils";

/**
 * Returns the first element of an array or string.
 * @function
 * @param {Array|string} coll - The collection to get the first element from.
 * @returns {*} The first element of the collection.
 * @throws {TypeError} If the input is not an array or string.
 *
 * @example
 * console.log(head([1, 2, 3])); // Output: 1
 * console.log(head("hello")); // Output: "h"
 */
export const head = _curry1(function (coll) {
    if (typeof coll === "string" || _isArray(coll)) {
        return coll[0];
    }

    throw new TypeError(
        "Cannot head a received value. Should be an array or a string"
    );
});
