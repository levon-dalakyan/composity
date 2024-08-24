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
export function iReduceAsync(reducer: (arg0: any, arg1: any, arg2: number, arg3: AsyncIterable<any>) => any, init?: any): (arg0: AsyncIterable<any>) => Promise<any>;
