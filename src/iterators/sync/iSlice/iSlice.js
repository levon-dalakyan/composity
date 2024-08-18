/**
 * Creates an iterator that yields a slice of an iterable from a start index to an end index.
 * @param {number} from - The start index (inclusive).
 * @param {number} to - The end index (exclusive).
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator yielding the specified slice.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const sliced = iSlice(1, 4)(numbers);
 * console.log([...sliced]); // [2, 3, 4]
 */
export function iSlice(from, to) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let cursor = 0;

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let current = iterator.next();

                while (cursor < from && !current.done) {
                    current = iterator.next();
                    cursor++;
                }

                if (cursor >= to || current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                cursor++;

                return current;
            },
        };
    };
}
