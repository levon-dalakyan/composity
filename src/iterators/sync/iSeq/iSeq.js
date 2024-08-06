export function iSeq(...iterables) {
    const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
    let cursor = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (cursor === iterators.length) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const current = iterators[cursor].next();

            if (current.done) {
                cursor++;
                return this.next();
            }

            return current;
        },
    };
}
