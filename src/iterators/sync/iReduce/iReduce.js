import { iEnumerate } from "../iEnumerate";

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
