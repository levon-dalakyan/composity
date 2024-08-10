export function _consumeWhile(iterable, predicate) {
    const iterator = iterable[Symbol.iterator]();
    let result = "";
    let current = iterator.next();

    while (!current.done && predicate(current.value, result.length)) {
        result += current.value;
        current = iterator.next();
    }

    return [
        result,
        {
            [Symbol.iterator]() {
                return {
                    next() {
                        return current;
                    },
                };
            },
        },
    ];
}
