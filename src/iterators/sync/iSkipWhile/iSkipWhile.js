/**
 * Creates an iterator that skips elements from the beginning of an iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be skipped.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator skipping elements while the predicate is true.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5, 1, 2];
 * const skipWhileLessThan3 = iSkipWhile(x => x < 3)(numbers);
 * console.log([...skipWhileLessThan3]); // [3, 4, 5, 1, 2]
 */
export function iSkipWhile(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let isSkipped = false;

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let current = iterator.next();

                if (!isSkipped) {
                    while (predicate(current.value) && !current.done) {
                        current = iterator.next();
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
