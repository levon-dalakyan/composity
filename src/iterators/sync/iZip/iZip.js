/**
 * Creates an iterator that yields arrays of elements from multiple iterables, pairing them by index.
 * @param {...Iterable} iterables - The input iterables to be zipped.
 * @returns {Iterator} An iterator yielding arrays of elements from the input iterables.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const letters = ['a', 'b', 'c'];
 * const zipped = iZip(numbers, letters);
 * console.log([...zipped]); // [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export function iZip(...iterables) {
    const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
    let nonEmptyIters = iterators.length;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (nonEmptyIters <= 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const result = [];

            for (const iterator of iterators) {
                const current = iterator.next();

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
