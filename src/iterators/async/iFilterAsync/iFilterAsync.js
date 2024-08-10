export function iFilterAsync(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

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
    };
}
