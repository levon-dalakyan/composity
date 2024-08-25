/**
 * Creates an async iterable from an array.
 * @param {Array} array - The input array to convert to an async iterable.
 * @returns {AsyncIterable} An async iterable that yields elements from the input array.
 *
 * @example
 * const numbers = _createAsyncIterable([1, 2, 3]);
 * for await (const num of numbers) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3
 */
export function _createAsyncIterable(array: any[]): AsyncIterable<any>;