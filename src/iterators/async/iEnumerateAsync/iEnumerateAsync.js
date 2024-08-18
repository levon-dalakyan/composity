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
export function iEnumerateAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    let count = 0;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            const current = await iterator.next();

            if (current.done) {
                return current;
            }

            return {
                value: [count++, current.value],
                done: false,
            };
        },
    };
}
