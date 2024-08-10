/**
 * Filters elements of an array based on a predicate function.
 * @function
 * @param {Function} pred - The function to test each element of the array.
 * @param {Array} coll - The array to filter.
 * @returns {Array} A new array with elements that pass the test.
 *
 * @example
 * const isEven = x => x % 2 === 0;
 * console.log(filter(isEven, [1, 2, 3, 4, 5])); // Output: [2, 4]
 */
export function filter(pred, coll) {
    const arr = [];

    for (let i = 0; i < coll.length; i++) {
        if (pred(coll[i])) {
            arr.push(coll[i]);
        }
    }

    return arr;
}
