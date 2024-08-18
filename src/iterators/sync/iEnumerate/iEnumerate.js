/**
 * Creates an iterator that yields pairs of [index, value] for each element in the input iterable.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} An iterator that yields [index, value] pairs.
 *
 * @example
 * const words = ['apple', 'banana', 'cherry'];
 * for (const [index, word] of iEnumerate(words)) {
 *   console.log(`${index}: ${word}`);
 * }
 * // Output:
 * // 0: apple
 * // 1: banana
 * // 2: cherry
 */
export function iEnumerate(iterable) {
    const iterator = iterable[Symbol.iterator]();
    let count = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            const current = iterator.next();

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
