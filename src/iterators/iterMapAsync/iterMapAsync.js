import { createAsyncIterableIterator } from "../utils/creators/creators.js";

export function iterMapAsync(iterable, fn) {
    const iterator = createAsyncIterableIterator(iterable);

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            const current = await iterator.next();

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
