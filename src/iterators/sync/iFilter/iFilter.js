export function iFilter(iterable, predicate) {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            while (true) {
                const current = iterator.next();

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
}
