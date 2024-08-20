export function iPipe(...fns) {
    return function (iterable) {
        return {
            [Symbol.iterator]() {
                let currentIterable = iterable;

                for (const fn of fns) {
                    currentIterable = fn(currentIterable);
                }

                const finalIterator = currentIterable[Symbol.iterator]();

                return {
                    next() {
                        return finalIterator.next();
                    },
                };
            },
        };
    };
}
