export function iTake(iterable, amount) {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let current = iterator.next();

            if (amount === 0 || current.done) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            amount--;

            return current;
        },
    };
}
