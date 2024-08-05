export function iSkipAsync(iterable, amount = 1) {
    const iterator = iterable[Symbol.asyncIterator]();

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            const current = await iterator.next();

            while (amount > 0 && !current.done) {
                current = await iterator.next();
                amount--;
            }

            if (current.done) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            return current;
        },
    };
}
