/**
 * Reduces an iterable to a single value.
 *
 * @function
 * @name _reduceIterator
 * @param {Function} reducer - The reducer function.
 * @param {*} init - The initial value for the reduction.
 * @param {Iterable} iter - The iterable to reduce.
 * @returns {*} The result of the reduction.
 * @description
 * This function reduces an iterable to a single value using the provided reducer function
 * and initial value.
 */
export function _reduceIterator(reducer: Function, init: any, iter: Iterable<any>): any;
