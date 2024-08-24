/**
 * Returns the first element of an async iterable.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {Promise<any>} A promise that resolves to the first element of the iterable, or undefined if the iterable is empty.
 *
 * @example
 * const fruits = async function*() { yield* ['apple', 'banana', 'cherry']; };
 * console.log(await iFirstAsync(fruits())); // 'apple'
 */
export function iFirstAsync(iterable: AsyncIterable<any>): Promise<any>;
