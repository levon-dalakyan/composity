/**
 * Creates an iterator that repeats the given iterable a specified number of times.
 * @param {number} [amount=Infinity] - The number of times to repeat the iterable.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns a repeating iterator.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const repeatedTwice = iRepeat(2)(numbers);
 * console.log([...repeatedTwice]); // [1, 2, 3, 1, 2, 3]
 */
export function iRepeat(amount = Infinity) {
    return function (iterable) {
        let iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                if (amount === 0) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                const current = iterator.next();

                if (current.done) {
                    amount--;
                    iterator = iterable[Symbol.iterator]();
                    return this.next();
                }

                return current;
            },
        };
    };
}
