/**
 * Reduces an object using its own reduce method.
 *
 * @function
 * @name _reduceByMethod
 * @param {string} methodName - The name of the reduce method to call.
 * @param {Object} obj - The object to reduce.
 * @param {Function} reducer - The reducer function.
 * @param {*} init - The initial value for the reduction.
 * @returns {*} The result of the reduction.
 * @description
 * This function reduces an object by calling its own reduce method with the provided
 * reducer function and initial value.
 */
export function _reduceByMethod(methodName, obj, reducer, init) {
    return obj[methodName]?.(reducer, init);
}
