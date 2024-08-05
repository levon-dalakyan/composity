export function iTapAsync(iterable, fn) {
    const iterator = iterable[Symbol.asyncIterator]();

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            const current = await iterator.next();

            if (!current.done) {
                fn(current.value);
            }

            return current;
        },
    };
}
