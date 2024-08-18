/**
 * Creates an async iterator that yields a slice of an async iterable from a start index to an end index.
 * @param {number} from - The start index (inclusive).
 * @param {number} to - The end index (exclusive).
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator yielding the specified slice.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const sliced = iSliceAsync(1, 4)(numbers());
 * for await (const num of sliced) {
 *   console.log(num);
 * }
 * // Output: 2, 3, 4
 */
export function iSliceAsync(from, to) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();
        let cursor = 0;

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                while (cursor < from && !current.done) {
                    current = await iterator.next();
                    cursor++;
                }

                if (cursor >= to || current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                cursor++;

                return current;
            },
        };
    };
}
