export function iZip(...iterables) {
    const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
    let nonEmptyIters = iterators.length;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (nonEmptyIters === 0) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const result = [];

            for (const iterator of iterators) {
                const current = iterator.next();

                if (current.done) {
                    nonEmptyIters--;
                }

                result.push(current.value ?? null);
            }

            return {
                value: result,
                done: false,
            };
        },
    };
}
