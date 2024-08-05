import { createIterableIterator } from "../utils/creators/creators.js";

export function iterMap(iterable, fn) {
    const iterator = createIterableIterator(iterable);

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            const current = iterator.next();

            if (current.done) {
                return current;
            }

            return {
                value: fn(current.value),
                done: false,
            };
        },
    };
}
