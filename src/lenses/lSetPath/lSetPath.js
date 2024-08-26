import { lSet } from "../lSet";
import { lPath } from "../lPath";

/**
 * Sets a value at a specified path in an object.
 * @param {Object} obj - The object to modify.
 * @param {Array} pathArray - An array representing the path to set the value at.
 * @param {*} value - The value to set.
 * @returns {Object} A new object with the updated value.
 *
 * @example
 * const data = { user: { profile: { name: 'Alice' } } };
 * const result = lSetPath(data, ['user', 'profile', 'name'], 'Bob');
 * console.log(result); // { user: { profile: { name: 'Bob' } } }
 */
export function lSetPath(obj, pathArray, value) {
    return lSet(lPath(...pathArray), value, obj);
}
