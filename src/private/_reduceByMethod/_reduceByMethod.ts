/**
 * Reduces an object using a specified method and reducer function, starting with an initial value.
 *
 * @template O The type of the object.
 * @template F The type of the reducer function.
 * @param {keyof O} methodName The name of the method to be used for reduction.
 * @param {O} obj The object to be reduced.
 * @param {F} reducer The reducer function to be applied to each element of the object.
 * @param {any} init The initial value for the reduction.
 * @return {ReturnType<F>} The final accumulated value after reducing the entire object.
 */
export function _reduceByMethod<O, F extends (...args: any) => any>(
    methodName: keyof O,
    obj: O,
    reducer: F,
    init: any
) {
    return (obj[methodName] as F)(reducer, init) as ReturnType<F>;
}
