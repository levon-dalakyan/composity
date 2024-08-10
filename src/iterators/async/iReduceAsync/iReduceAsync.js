import { iEnumerateAsync } from "../iEnumerateAsync";

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

        for (const [idx, value] of iterator) {
            init = reducer(init, value, idx, iterable);
        }

        return init;
    };
}
