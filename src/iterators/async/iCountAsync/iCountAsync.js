export async function iCountAsync(iterable) {
    let counter = 0;

    for await (const _ of iterable) {
        counter++;
    }

    return counter;
}
