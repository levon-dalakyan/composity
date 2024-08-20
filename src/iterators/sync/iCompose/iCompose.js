export function iCompose(...fns) {
    return function (iterable) {
        return {
            [Symbol.iterator]() {
                let currentIterator = iterable;

                for (const fn of fns.reverse()) {
                    currentIterator = fn(currentIterator);
                }

                const finalIterator = currentIterator[Symbol.iterator]();

                return {
                    next() {
                        return finalIterator.next();
                    },
                };
            },
        };
    };
}
