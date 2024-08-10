export function iTakeAsync(amount) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                if (amount === 0 || current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                amount--;

                return current;
            },
        };
    };
}
