export function iSeqAsync(...iterables) {
    const iterators = iterables.map((iterable) =>
        iterable[Symbol.asyncIterator]()
    );
    let cursor = 0;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (cursor === iterators.length) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const current = await iterators[cursor].next();

            if (current.done) {
                cursor++;
                return await this.next();
            }

            return current;
        },
    };
}
