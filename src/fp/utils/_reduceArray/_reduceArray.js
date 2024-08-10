/**
 * Reduces an array to a single value.
 *
 * @function
 * @name _reduceArray
 * @param {Function} reducer - The reducer function.
 * @param {*} init - The initial value for the reduction.
 * @param {Array} arr - The array to reduce.
 * @returns {*} The result of the reduction.
 * @description
 * This function reduces an array to a single value using the provided reducer function
 * and initial value.
 */
export function _reduceArray(reducer, init, arr) {
    let acc = init;

    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i]);
    }

    return acc;
}
