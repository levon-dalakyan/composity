/**
 * Reduces a collection to a single value.
 * @function
 * @param {Function} reducer - The reducer function.
 * @param {*} init - The initial value.
 * @param {Array} coll - The collection to reduce.
 * @returns {*} The final reduced value.
 *
 * @example
 * const sum = (acc, val) => acc + val;
 * console.log(reduce(sum, 0, [1, 2, 3, 4, 5])); // Output: 15
 */
export const reduce: Function;
