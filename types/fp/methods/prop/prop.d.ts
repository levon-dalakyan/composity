/**
 * Returns the value at the specified property of an object.
 * @function
 * @param {string|number} key - The property name or array index.
 * @param {Object|Array} obj - The object or array to access.
 * @returns {*} The value at the specified property.
 *
 * @example
 * const person = { name: "Alice", age: 30 };
 * console.log(prop("name", person)); // Output: "Alice"
 * const numbers = [10, 20, 30];
 * console.log(prop(1, numbers)); // Output: 20
 */
export const prop: Function;
