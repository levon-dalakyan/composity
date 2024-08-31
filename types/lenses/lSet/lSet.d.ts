/**
 * Sets a value focused by a lens.
 * @param {Object} lens - The lens to use.
 * @param {*} value - The new value to set.
 * @param {Object} obj - The object to modify.
 * @returns {Object} A new object with the updated value.
 *
 * @example
 * const data = { count: 5 };
 * const countLens = lProp('count');
 * const result = lSet(countLens, 10, data);
 * console.log(result); // { count: 10 }
 */
export function lSet(lens: any, value: any, obj: any): any;
