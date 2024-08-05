export function iSkipWhileAsync(iterable, predicate) {
    const iterator = iterable[Symbol.asyncIterator]();
    let isSkipped = false;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            let current = await iterator.next();

            if (!isSkipped) {
                while (predicate(current.value) && !current.done) {
                    current = await iterator.next();
                }
                isSkipped = true;
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
