export function iEnumerateAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    let count = 0;

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
                value: [count++, current.value],
                done: false,
            };
        },
    };
}
