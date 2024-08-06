export async function iToArrayAsync(iterable) {
    const array = [];

    for await (const value of iterable) {
        array.push(value);
    }

    return array;
}
