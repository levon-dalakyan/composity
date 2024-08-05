export function iSlice(iterable, from, to) {
    const iterator = iterable[Symbol.iterator]();
    let cursor = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let current = iterator.next();

            while (cursor < from && !current.done) {
                current = iterator.next();
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
}
