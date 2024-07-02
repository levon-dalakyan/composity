/**
 * Reduces an iterator using a reducer function, starting with an initial value.
 *
 * @template F The type of the reducer function.
 * @param {Iterator<any> | { next: () => { value?: any; done: boolean } }} iter The iterator to be reduced.
 * @param {F} reducer The reducer function to be applied to each element of the iterator.
 * @param {any} init The initial value for the reduction.
 * @return {ReturnType<F>} The final accumulated value after reducing the entire iterator.
 */
export function _reduceIterator<F extends (...args: any) => any>(
    iter: Iterator<any> | { next: () => { value?: any; done: boolean } },
    reducer: F,
    init: any
) {
    let acc: ReturnType<F> = init;

    let curr = iter.next();

    while (curr.done === false) {
        acc = reducer(acc, curr.value);

        curr = iter.next();
    }

    return acc;
}
