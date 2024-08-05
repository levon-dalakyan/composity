export function iMap(iterable, fn) {
    const iterator = iterable[Symbol.iterator]();

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