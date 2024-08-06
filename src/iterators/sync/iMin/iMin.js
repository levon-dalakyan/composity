export function iMin(iterable) {
    let min = Infinity;

    for (const value of iterable) {
        if (value < min) {
            min = value;
        }
    }

    return min;
}
