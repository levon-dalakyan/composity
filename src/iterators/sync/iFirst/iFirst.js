export function iFirst(iterable) {
    const iterator = iterable[Symbol.iterator]();

    return iterator.next().value;
}
