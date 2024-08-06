export function iZipAsync(...iterables) {
    const iterators = iterables.map((iterable) =>
        iterable[Symbol.asyncIterator]()
    );
    let nonEmptyIters = iterators.length;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (nonEmptyIters === 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const result = [];
            const allItersFull = nonEmptyIters === iterators.length;

            for (const iterator of iterators) {
                const current = await iterator.next();

                if (current.done) {
                    nonEmptyIters--;
                }

                result.push(current.value ?? null);
            }

            if (allItersFull && nonEmptyIters === 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            return {
                value: result,
                done: false,
            };
        },
    };
}
