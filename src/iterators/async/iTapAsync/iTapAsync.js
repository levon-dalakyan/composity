/**
 * Creates an async iterator that applies a side-effect function to each element of an async iterable without modifying the elements.
 * @param {function(any): void} fn - A function to be called for each element.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator applying the side-effect function.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3]; };
 * const logged = iTapAsync(console.log)(numbers());
 * for await (const num of logged) {}
 * // Logs: 1, 2, 3
 */
export function iTapAsync(fn) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                const current = await iterator.next();

                if (!current.done) {
                    fn(current.value);
                }

                return current;
            },
        };
    };
}
