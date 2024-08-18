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
export function iReverse(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const buffer = [];
    let isBufferFull = false;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (!isBufferFull) {
                let current;

                while (!(current = iterator.next()).done) {
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
