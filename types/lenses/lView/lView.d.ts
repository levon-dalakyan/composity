/**
 * Retrieves a value focused by a lens.
 * @param {Object} lens - The lens to use.
 * @param {Object} obj - The object to retrieve the value from.
 * @returns {*} The value focused by the lens.
 *
 * @example
 * const data = { count: 5 };
 * const countLens = lProp('count');
 * console.log(lView(countLens, data)); // 5
 */
export function lView(lens: any, obj: any): any;
