export function _nth(offset, coll) {
    return offset < 0 ? coll[coll.length + offset] : coll[offset];
}
