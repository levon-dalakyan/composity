/**
 * Creates a pipeline of functions that operate on iterables.
 * The functions are applied from left to right.
 * @param {...function(Iterable): Iterable} fns - The functions to pipeline.
 * @returns {function(Iterable): Iterable} A function that takes an iterable and returns a new iterable with all functions applied.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const doubledOdds = iPipe(
 *   iFilter(x => x % 2 !== 0),
 *   iMap(x => x * 2)
 * )(numbers);
 * console.log([...doubledOdds]); // [2, 6, 10]
 */
export function iPipe(...fns) {
    return function (iterable) {
        return {
            [Symbol.iterator]() {
                let currentIterable = iterable;

                for (const fn of fns) {
                    currentIterable = fn(currentIterable);
                }

                const finalIterator = currentIterable[Symbol.iterator]();

                return {
                    next() {
                        return finalIterator.next();
                    },
                };
            },
        };
    };
}
