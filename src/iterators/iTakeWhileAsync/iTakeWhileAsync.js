export function iTakeWhileAsync(iterable, predicate) {
    const iterator = iterable[Symbol.asyncIterator]();
    let isTaken = false;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            const current = await iterator.next();

            if (!predicate(current.value) || isTaken || current.done) {
                isTaken = true;

                return {
                    value: undefined,
                    done: true,
                };
            }

            return current;
        },
    };
}
