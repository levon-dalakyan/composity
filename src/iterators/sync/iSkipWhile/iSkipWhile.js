export function iSkipWhile(predicate) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let isSkipped = false;

        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let current = iterator.next();

                if (!isSkipped) {
                    while (predicate(current.value) && !current.done) {
                        current = iterator.next();
                    }
                    isSkipped = true;
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
