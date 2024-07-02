/**
 * Reduces an array using a reducer function, starting with an initial value.
 *
 * @template F The type of the reducer function.
 * @param {any[]} arr The array to be reduced.
 * @param {F} reducer The reducer function to be applied to each element of the array.
 * @param {any} init The initial value for the reduction.
 * @return {ReturnType<F>} The final accumulated value after reducing the entire array.
 */
export function _reduceArray<F extends (...args: any) => any>(
    arr: any[],
    reducer: F,
    init: any
) {
    let acc: ReturnType<F> = init;

    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i]);
    }

    return acc;
}
