import { _curry1 } from "../../utils";

/**
 * Creates a deep clone of the provided object or array.
 * @function
 * @param {*} obj - The object or array to clone.
 * @returns {*} A new deep copy of the input.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = clone(original);
 * console.log(cloned); // Output: { a: 1, b: { c: 2 } }
 * console.log(cloned === original); // Output: false
 * console.log(cloned.b === original.b); // Output: false
 */
export const clone = _curry1(function clone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = clone(obj[key]);
        }
    }

    return newObj;
});
