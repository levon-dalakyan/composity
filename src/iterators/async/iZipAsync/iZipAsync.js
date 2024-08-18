/**
 * Creates an async iterator that yields arrays of elements from multiple async iterables, pairing them by index.
 * @param {...AsyncIterable} iterables - The input async iterables to be zipped.
 * @returns {AsyncIterator} An async iterator yielding arrays of elements from the input async iterables.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3]; };
 * const letters = async function*() { yield* ['a', 'b', 'c']; };
 * const zipped = iZipAsync(numbers(), letters());
 * for await (const item of zipped) {
 *   console.log(item);
 * }
 * // Output: [1, 'a'], [2, 'b'], [3, 'c']
 */
export function iZipAsync(...iterables) {
    const iterators = iterables.map((iterable) =>
        iterable[Symbol.asyncIterator]()
    );
    let nonEmptyIters = iterators.length;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (nonEmptyIters <= 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const result = [];

            for (const iterator of iterators) {
                const current = await iterator.next();

                if (current.done) {
                    nonEmptyIters--;
                }

                result.push(current.value ?? null);
            }

            if (nonEmptyIters <= 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            return {
                value: result,
                done: false,
            };
        },
    };
}
