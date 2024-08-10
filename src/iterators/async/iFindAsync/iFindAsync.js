export function iFindAsync(predicate) {
    return async function (iterable) {
        for await (const value of iterable) {
            if (predicate(value)) {
                return value;
            }
        }
    };
}
