export function iCount(iterable) {
    let counter = 0;

    for (const _ of iterable) {
        counter++;
    }

    return counter;
}
