export function iSliceAsync(from, to) {
    return function (iterable) {
        const iterator = iterable[Symbol.asyncIterator]();
        let cursor = 0;

        return {
            [Symbol.asyncIterator]() {
                return this;
            },

            async next() {
                let current = await iterator.next();

                while (cursor < from && !current.done) {
                    current = await iterator.next();
                    cursor++;
                }

                if (cursor >= to || current.done) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                cursor++;

                return current;
            },
        };
    };
}
