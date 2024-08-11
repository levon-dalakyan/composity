export async function iFirstAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();

    return await iterator.next().value;
}
