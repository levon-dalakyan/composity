export async function iToSetAsync(iterable) {
    const set = new Set();

    for await (const value of iterable) {
        set.add(value);
    }

    return set;
}
