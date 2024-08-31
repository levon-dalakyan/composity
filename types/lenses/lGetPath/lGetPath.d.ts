/**
 * Retrieves the value at a specified path in an object.
 * @param {Object} obj - The object to retrieve the value from.
 * @param {Array} pathArray - An array representing the path to the desired value.
 * @returns {*} The value at the specified path.
 *
 * @example
 * const data = { user: { profile: { name: 'Bob' } } };
 * console.log(lGetPath(data, ['user', 'profile', 'name'])); // 'Bob'
 */
export function lGetPath(obj: any, pathArray: any[]): any;
