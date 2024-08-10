export function iRepeat(amount = Infinity) {
    return function (iterable) {
        let iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                if (amount === 0) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }

                const current = iterator.next();

                if (current.done) {
                    amount--;
                    iterator = iterable[Symbol.iterator]();
                    return this.next();
                }

                return current;
            },
        };
    };
}
