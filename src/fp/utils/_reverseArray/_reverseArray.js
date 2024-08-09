/**
 * Reverses an array.
 *
 * @function
 * @name _reverseArray
 * @param {Array} coll - The array to reverse.
 * @returns {Array} A new array with elements in reverse order.
 * @description
 * This function creates a new array with all elements in reverse order.
 */
export function _reverseArray(coll) {
    const reversed = [];

    for (let i = coll.length - 1; i >= 0; i--) {
        reversed.push(coll[i]);
    }

    return reversed;
}
