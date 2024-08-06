export function iMax(iterable) {
    let max = -Infinity;

    for (const value of iterable) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}
