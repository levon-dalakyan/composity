import { _curry1 } from "../../utils";

/**
 * Returns an array of a given object's own enumerable property names.
 * @function
 * @param {Object} obj - The object whose properties are to be returned.
 * @returns {Array} An array of the object's own enumerable property names.
 *
 * @example
 * console.log(keys({a: 1, b: 2, c: 3})); // Output: ["a", "b", "c"]
 */
export const keys = _curry1(function (obj) {
    if (Object(obj) !== obj) {
        return [];
    }

    const _keys = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            _keys.push(key);
        }
    }

    return _keys;
});
