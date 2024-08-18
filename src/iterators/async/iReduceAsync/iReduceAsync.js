import { iEnumerateAsync } from "../iEnumerateAsync";

/**
 * Creates a reducing function for an async iterable.
 * @param {function(any, any, number, AsyncIterable): any} reducer - The reducer function.
 * @param {any} [init] - The initial value for the reduction.
 * @returns {function(AsyncIterable): Promise<any>} A function that takes an async iterable and returns a promise that resolves to the reduced value.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const sum = await iReduceAsync((acc, val) => acc + val, 0)(numbers());
 * console.log(sum); // 15
 */
export function iReduceAsync(reducer, init) {
    return async function (iterable) {
        const iterator = iEnumerateAsync(iterable);

        if (init === undefined) {
            const current = await iterator.next();

            if (current.done) {
                return init;
            }

            init = current.value[1];
        }

        for await (const [idx, value] of iterator) {
            init = reducer(init, value, idx, iterable);
        }

        return init;
    };
}
