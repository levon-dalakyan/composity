/**
 * Applies a modifier function to a value focused by a lens.
 * @param {Object} lens - The lens to use.
 * @param {Function} modifier - A function that takes the current value and returns the new value.
 * @param {Object} obj - The object to modify.
 * @returns {Object} A new object with the modified value.
 *
 * @example
 * const data = { count: 5 };
 * const countLens = lProp('count');
 * const result = lOver(countLens, x => x + 1, data);
 * console.log(result); // { count: 6 }
 */
export function lOver(lens: any, modifier: Function, obj: any): any;
