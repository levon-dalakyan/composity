/**
 * Creates an iterator that yields the elements of the input iterable in reverse order.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} An iterator that yields the elements in reverse order.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const reversed = iReverse(numbers);
 * console.log([...reversed]); // [5, 4, 3, 2, 1]
 */
export function iReverse(iterable: Iterable<any>): Iterator<any, any, undefined>;
