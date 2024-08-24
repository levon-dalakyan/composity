/**
 * Creates an async iterator that yields pairs of [index, value] for each element in the input async iterable.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {AsyncIterator} An async iterator that yields [index, value] pairs.
 *
 * @example
 * const words = async function*() { yield* ['apple', 'banana', 'cherry']; };
 * const enumerated = iEnumerateAsync(words());
 * for await (const [index, word] of enumerated) {
 *   console.log(`${index}: ${word}`);
 * }
 * // Output:
 * // 0: apple
 * // 1: banana
 * // 2: cherry
 */
export function iEnumerateAsync(iterable: AsyncIterable<any>): AsyncIterator<any, any, undefined>;
