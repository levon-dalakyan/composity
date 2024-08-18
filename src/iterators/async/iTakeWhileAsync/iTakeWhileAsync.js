/**
 * Creates an async iterator that yields elements from the beginning of an async iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be taken.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator yielding elements while the predicate is true.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const takeLessThan4 = iTakeWhileAsync(x => x < 4)(numbers());
 * for await (const num of takeLessThan4) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3
 */
export function iTakeWhileAsync(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();
        let isTaken = false;

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                const current = await iterator.next();

                if (!predicate(current.value) || isTaken || current.done) {
                    isTaken = true;

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
