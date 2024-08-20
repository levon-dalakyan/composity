export function iComposeAsync(...fns) {
    return function (iterable) {
        return {
            [Symbol.asyncIterator]() {
                let currentIterable = iterable;

                for (const fn of fns.reverse()) {
                    currentIterable = fn(currentIterable);
                }

                const finalIterator = currentIterable[Symbol.asyncIterator]();

                return {
                    async next() {
                        return await finalIterator.next();
                    },
                };
            },
        };
    };
}
