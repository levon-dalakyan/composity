export function iTap(fn) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                const current = iterator.next();

                if (!current.done) {
                    fn(current.value);
                }

                return current;
            },
        };
    };
}
