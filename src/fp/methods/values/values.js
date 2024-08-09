import { _curry1 } from "../utils";
import { keys } from "../keys";

/**
 * Returns an array of a given object's own enumerable property values.
 * @function
 * @param {Object} obj - The object whose values are to be returned.
 * @returns {Array} An array of the object's own enumerable property values.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * console.log(values(obj)); // Output: [1, 2, 3]
 */
export const values = _curry1(function (obj) {
    const objKeys = keys(obj);

    const _values = [];

    for (let i = 0; i < objKeys.length; i++) {
        _values.push(obj[objKeys[i]]);
    }

    return _values;
});
