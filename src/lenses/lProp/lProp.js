import { lLens } from "../lLens";

/**
 * Creates a lens for a specific property of an object.
 * @param {string} prop - The name of the property to focus on.
 * @returns {Object} A lens for the specified property.
 *
 * @example
 * const data = { name: 'Alice', age: 30 };
 * const nameLens = lProp('name');
 * console.log(lView(nameLens, data)); // 'Alice'
 * console.log(lSet(nameLens, 'Bob', data)); // { name: 'Bob', age: 30 }
 */
export function lProp(prop) {
    return lLens(
        (obj) => obj?.[prop],
        (value, obj) => ({ ...obj, [prop]: value })
    );
}
