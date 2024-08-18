/**
 * Creates a mapping async iterator based on a transformation function.
 * @param {function(any): any} fn - A function that transforms each value.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns a mapping async iterator.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4]; };
 * const doubled = iMapAsync(x => x * 2)(numbers());
 * for await (const num of doubled) {
 *   console.log(num);
 * }
 * // Output: 2, 4, 6, 8
 */
export function iMapAsync(fn) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

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
                    value: fn(current.value),
                    done: false,
                };
            },
        };
    };
}
