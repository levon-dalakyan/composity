export async function iToArrayAsync(iterable) {
    const result = [];

    for await (const value of iterable) {
        result.push(value);
    }

    return result;
}
