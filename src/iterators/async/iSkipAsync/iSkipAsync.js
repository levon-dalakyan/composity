/**
 * Creates an async iterator that skips a specified number of elements from the beginning of an async iterable.
 * @param {number} [amount=1] - The number of elements to skip.
 * @returns {function(AsyncIterable): AsyncIterator} A function that takes an async iterable and returns an async iterator skipping the specified number of elements.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const skipTwo = iSkipAsync(2)(numbers());
 * for await (const num of skipTwo) {
 *   console.log(num);
 * }
 * // Output: 3, 4, 5
 */
export function iSkipAsync(amount = 1) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                while (amount > 0 && !current.done) {
                    current = await iterator.next();
                    amount--;
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
