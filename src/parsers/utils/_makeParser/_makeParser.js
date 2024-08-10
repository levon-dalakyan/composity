export function _makeParser(parserLogic) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let lastValue = null;
        let isDone = false;

        let current;

        function nextValue() {
            current = iterator.next();

            if (current.done) {
                isDone = true;
            }

            return current;
        }

        function saveLastValue() {
            lastValue = current.value;
        }

        const result = parserLogic(nextValue, saveLastValue);

        const restIterator = {
            [Symbol.iterator]() {
                let lastYielded = false;

                return {
                    next() {
                        if (isDone) {
                            return { value: undefined, done: true };
                        }

                        if (!lastYielded && lastValue !== null) {
                            lastYielded = true;
                            return { value: lastValue, done: false };
                        }

                        return iterator.next();
                    },
                };
            },
        };

        return { ...result, rest: restIterator };
    };
}
