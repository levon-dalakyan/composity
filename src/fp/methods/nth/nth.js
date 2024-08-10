import { _curry2, _nth } from "../../utils";

/**
 * Returns the nth element of a list.
 * @function
 * @param {number} index - The index of the element to return.
 * @param {Array} list - The list to get the element from.
 * @returns {*} The element at the specified index.
 *
 * @example
 * console.log(nth(1, ['a', 'b', 'c'])); // Output: 'b'
 */
export const nth = _curry2(_nth);
