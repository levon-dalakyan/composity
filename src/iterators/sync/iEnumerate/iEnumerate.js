export function iEnumerate(iterable) {
    const iterator = iterable[Symbol.iterator]();
    let count = 0;

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
                value: [count++, current.value],
                done: false,
            };
        },
    };
}