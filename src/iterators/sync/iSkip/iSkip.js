/**
 * Creates an iterator that skips a specified number of elements from the beginning of an iterable.
 * @param {number} [amount=1] - The number of elements to skip.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator skipping the specified number of elements.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const skipTwo = iSkip(2)(numbers);
 * console.log([...skipTwo]); // [3, 4, 5]
 */
export function iSkip(amount = 1) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let current = iterator.next();

                while (amount > 0 && !current.done) {
                    current = iterator.next();
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
