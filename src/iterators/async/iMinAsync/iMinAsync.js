export async function iMinAsync(iterable) {
    let min = Infinity;

    for await (const value of iterable) {
        if (value < min) {
            min = value;
        }
    }

    return min;
}
