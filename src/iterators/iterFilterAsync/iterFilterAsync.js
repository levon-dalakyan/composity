import { createAsyncIterableIterator } from "../utils/creators/creators.js";

export function iterFilterAsync(iterable, predicate) {
    const iterator = createAsyncIterableIterator(iterable);

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            while (true) {
                const current = await iterator.next();

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
