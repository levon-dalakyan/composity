/**
 * Retrieves the nth element from a collection.
 *
 * @function
 * @name _nth
 * @param {number} offset - The index of the element to retrieve.
 * @param {Array|string} coll - The collection to access.
 * @returns {*} The element at the specified index.
 * @description
 * This function returns the element at the specified index in the collection.
 * Negative indices count from the end of the collection.
 */
export function _nth(offset, coll) {
    return offset < 0 ? coll[coll.length + offset] : coll[offset];
}
