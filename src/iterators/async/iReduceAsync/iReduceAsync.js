import { iEnumerateAsync } from "../iEnumerateAsync/iEnumerateAsync.js";

export async function iReduceAsync(iterable, reducer, init) {
    const iterator = iEnumerateAsync(iterable);

    if (init === undefined) {
        const current = await iterator.next();

        if (current.done) {
            return init;
        }

        init = current.value[1];
    }

    for (const [idx, value] of iterator) {
        init = reducer(init, value, idx, iterable);
    }

    return init;
}
