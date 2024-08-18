/**
 * Creates an async iterator that yields a specified number of elements from the beginning of an async iterable.
 * @param {number} amount - The number of elements to take.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator yielding the specified number of elements.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const takeThree = iTakeAsync(3)(numbers());
 * for await (const num of takeThree) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3
 */
export function iTakeAsync(amount) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                if (amount === 0 || current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                amount--;

                return current;
            },
        };
    };
}
