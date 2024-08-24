/**
 * Creates a function with a specified arity that delegates to the original function.
 *
 * @function
 * @name _arify
 * @param {number} amount - The desired arity of the resulting function.
 * @param {Function} fn - The function to arify.
 * @returns {Function} A function with the specified arity that calls the original function.
 * @throws {Error} If the specified arity is not between 0 and 15.
 * @description
 * This function creates a wrapper function with a specified number of parameters
 * that delegates to the original function, preserving the `this` context and all arguments.
 */
export function _arify(amount: number, fn: Function): Function;
