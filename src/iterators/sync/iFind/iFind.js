export function iFind(predicate) {
    return function (iterable) {
        for (const value of iterable) {
            if (predicate(value)) {
                return value;
            }
        }
    };
}
