export async function iFindAsync(iterable, predicate) {
    for await (const value of iterable) {
        if (predicate(value)) {
            return value;
        }
    }
}
