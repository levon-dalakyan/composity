/**
 * Modifies a value at a specified path in an object using a modifier function.
 * @param {Object} obj - The object to modify.
 * @param {Array} pathArray - An array representing the path to the value to modify.
 * @param {Function} modifier - A function that takes the current value and returns the new value.
 * @returns {Object} A new object with the modified value.
 *
 * @example
 * const data = { user: { score: 10 } };
 * const result = lModifyPath(data, ['user', 'score'], score => score * 2);
 * console.log(result); // { user: { score: 20 } }
 */
export function lModifyPath(obj: any, pathArray: any[], modifier: Function): any;
