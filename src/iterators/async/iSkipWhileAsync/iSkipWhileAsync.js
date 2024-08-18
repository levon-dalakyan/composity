/**
 * Creates an async iterator that skips elements from the beginning of an async iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be skipped.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator skipping elements while the predicate is true.
 *
 * @example
 * const numbers = async function*() {yeild* [1, 2, 3, 4, 5, 1, 2]; };
 * const skipWhileLessThan3 = iSkipWhileAsync(x => x < 3)(numbers());
 * for await (const num of skipWhileLessThan3) {
 *   console.log(num);
 * }
 * // Output: 3, 4, 5, 1, 2
 */
export function iSkipWhileAsync(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();
        let isSkipped = false;

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                if (!isSkipped) {
                    while (predicate(current.value) && !current.done) {
                        current = await iterator.next();
                    }
                    isSkipped = true;
                }

                if (current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                return current;
            },
        };
    };
}
