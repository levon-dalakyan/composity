import { _curry1, _isArray } from "../utils";

/**
 * Returns all but the first element of an array or string.
 * @function
 * @param {Array|string} coll - The collection to get the tail of.
 * @returns {Array|string} All but the first element of the input.
 * @throws {TypeError} If the input is not an array or string.
 *
 * @example
 * console.log(tail([1, 2, 3, 4])); // Output: [2, 3, 4]
 * console.log(tail("hello")); // Output: "ello"
 */
export const tail = _curry1(function (coll) {
    if (typeof coll === "string" || _isArray(coll)) {
        return coll.slice(1);
    }

    throw new TypeError(
        "Cannot tail a received value. Should be an array or a string"
    );
});
