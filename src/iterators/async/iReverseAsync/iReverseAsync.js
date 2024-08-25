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
export function iReverseAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    const buffer = [];
    let isBufferFull = false;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (!isBufferFull) {
                let current;

                while (!(current = await iterator.next()).done) {
                    buffer.unshift(current.value);
                }

                isBufferFull = true;
            }

            if (buffer.length > 0) {
                return {
                    value: buffer.shift(),
                    done: false,
                };
            }

            return {
                value: undefined,
                done: true,
            };
        },
    };
}
