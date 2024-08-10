export function iSkip(amount = 1) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let current = iterator.next();

                while (amount > 0 && !current.done) {
                    current = iterator.next();
                    amount--;
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
    };
}
