/**
 * Creates a mapping iterator based on a transformation function.
 * @param {function(any): any} fn - A function that transforms each value.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns a mapping iterator.
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const doubled = iMap(x => x * 2)(numbers);
 * console.log([...doubled]); // [2, 4, 6, 8]
 */
export function iMap(fn) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                const current = iterator.next();

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
