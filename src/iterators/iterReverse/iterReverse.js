import { createIterableIterator } from "../utils/creators/creators.js";

export function iterReverse(iterable) {
    const iterator = createIterableIterator(iterable);
    const buffer = [];
    let isBufferFull = false;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (!isBufferFull) {
                let current;
                while ((current = iterator.next()).done === false) {
                    buffer.unshift(current.value);
                }
                isBufferFull = true;
            }

            if (buffer.length > 0) {
                return {
                    value: buffer.pop(),
                    done: false,
                };
            }

            return {
                value: undefined,
                done: true,
            };
        },
    };
}
