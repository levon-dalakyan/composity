export function iPipeAsync(...fns) {
    return function (iterable) {
        return {
            [Symbol.asyncIterator]() {
                let currentIterable = iterable;

                for (const fn of fns) {
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
