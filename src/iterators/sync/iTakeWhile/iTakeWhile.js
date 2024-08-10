export function iTakeWhile(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let isTaken = false;

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                const current = iterator.next();

                if (!predicate(current.value) || isTaken || current.done) {
                    isTaken = true;

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
