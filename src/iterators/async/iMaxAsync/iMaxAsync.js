export async function iMaxAsync(iterable) {
    let max = -Infinity;

    for await (const value of iterable) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}
