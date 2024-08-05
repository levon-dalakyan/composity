import { createIterableIterator } from "../utils/creators/creators.js";

export function iFilter(iterable, predicate) {
    const iterator = createIterableIterator(iterable);

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            while (true) {
                const current = iterator.next();

                if (current.done) {
                    return current;
                }

                if (predicate(current.value)) {
                    return {
                        value: current.value,
                        done: false,
                    };
                }
            }
        },
    };
}
