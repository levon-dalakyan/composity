export function _nth(offset, collection) {
    return offset < 0
        ? collection[collection.length + offset]
        : collection[offset];
}
