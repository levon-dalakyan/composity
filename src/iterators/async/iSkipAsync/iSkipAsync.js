export function iSkipAsync(amount = 1) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

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
    };
}
