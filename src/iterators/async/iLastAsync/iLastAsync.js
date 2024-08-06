export async function iLastAsync(iterable) {
    let result;

    for await (const value of iterable) {
        result = value;
    }

    return result;
}
