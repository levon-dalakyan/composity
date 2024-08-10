export function iTake(amount) {
    return function (iterable) {
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
    };
}
