/**
 * Reverses the order of elements in an async iterable.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {AsyncIterable} A new async iterable with the elements in reverse order.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const reversed = iReverseAsync(numbers());
 * for await (const num of reversed) {
 *   console.log(num);
 * }
 * // Output: 5, 4, 3, 2, 1
 */
export function iReverseAsync(iterable: AsyncIterable<any>): AsyncIterable<any>;
