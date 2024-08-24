/**
 * Curries a function of arity 1.
 *
 * @function
 * @name _curry1
 * @param {Function} fn - The function to be curried.
 * @returns {Function} A curried version of the input function.
 * @description
 * This function transforms a function of arity 1 into a curried version.
 * If no arguments are provided or a placeholder is used, it returns itself.
 * Otherwise, it calls the original function with the provided argument.
 */
export function _curry1(fn: Function): Function;
