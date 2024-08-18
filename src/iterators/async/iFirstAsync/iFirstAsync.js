export async function iFirstAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();

    const result = await iterator.next();
    return result.value;
}
