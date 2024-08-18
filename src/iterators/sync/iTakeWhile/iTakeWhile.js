/**
 * Creates an iterator that yields elements from the beginning of an iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be taken.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator yielding elements while the predicate is true.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5, 1, 2];
 * const takeLessThan4 = iTakeWhile(x => x < 4)(numbers);
 * console.log([...takeLessThan4]); // [1, 2, 3]
 */
export function iTakeWhile(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let isTaken = false;

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                const current = iterator.next();

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
