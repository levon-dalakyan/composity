import { iEnumerate } from "../iEnumerate";

/**
 * Creates a reducing function for an iterable.
 * @param {function(any, any, number, Iterable): any} reducer - The reducer function.
 * @param {any} [init] - The initial value for the reduction.
 * @returns {function(Iterable): any} A function that takes an iterable and returns the reduced value.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const sum = iReduce((acc, val) => acc + val, 0)(numbers);
 * console.log(sum); // 15
 */
export function iReduce(reducer, init) {
    return function (iterable) {
        const iterator = iEnumerate(iterable);

        if (init === undefined) {
            const current = iterator.next();

            if (current.done) {
                return init;
            }

            init = current.value[1];
        }

        for (const [idx, value] of iterator) {
            init = reducer(init, value, idx, iterable);
        }

        return init;
    };
}
