export function iMapAsync(fn) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();

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
                    value: fn(current.value),
                    done: false,
                };
            },
        };
    };
}
