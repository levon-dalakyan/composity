/**
 * Creates a new array with the results of calling a provided function on every element in the array.
 * @function
 * @param {Function} transformer - Function that produces an element of the new array.
 * @param {Array} coll - Array to map over.
 * @returns {Array} A new array with each element being the result of the transformer function.
 *
 * @example
 * const double = x => x * 2;
 * console.log(map(double, [1, 2, 3])); // Output: [2, 4, 6]
 */
export function map(transformer, coll) {
    const arr = [];

    for (let i = 0; i < coll.length; i++) {
        arr.push(transformer(coll[i]));
    }

    return arr;
}
