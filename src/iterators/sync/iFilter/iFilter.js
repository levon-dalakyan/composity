/**
 * Creates a filtering iterator based on a predicate function.
 * @param {function(any): boolean} predicate - A function that returns true for values to be included.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns a filtering iterator.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5, 6];
 * const evenNumbers = iFilter(x => x % 2 === 0)(numbers);
 * console.log([...evenNumbers]); // [2, 4, 6]
 */
export function iFilter(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                while (true) {
                    const current = iterator.next();

                    if (current.done) {
                        return current;
                    }

                    if (predicate(current.value)) {
                        return {
                            value: current.value,
                            done: false,
                        };
                    }
                }
            },
        };
    };
}
