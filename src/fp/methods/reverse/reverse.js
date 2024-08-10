import {
    _curry1,
    _isArray,
    _reverseArray,
    _reverseString,
    _reverseIterator,
} from "../../utils";

/**
 * Reverses the elements of an array, string, or iterable.
 * @function
 * @param {Array|string|Iterable} coll - The collection to reverse.
 * @returns {Array|string|Iterable} The reversed collection.
 * @throws {TypeError} If the input cannot be reversed.
 *
 * @example
 * console.log(reverse([1, 2, 3])); // Output: [3, 2, 1]
 * console.log(reverse("hello")); // Output: "olleh"
 */
export const reverse = _curry1(function reverse(coll) {
    if (typeof coll === "string") {
        return _reverseString(coll);
    }

    if (typeof coll[Symbol.iterator] === "function") {
        return _reverseIterator(coll);
    }

    if (_isArray(coll)) {
        return _reverseArray(coll);
    }

    if (typeof coll.reverse === "function") {
        return coll.reverse();
    }

    throw new TypeError("Cannot reverse a received value");
});
