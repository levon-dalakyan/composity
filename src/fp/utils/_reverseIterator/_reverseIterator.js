import { _reverseArray } from "../_reverseArray";

/**
 * Reverses an iterator.
 *
 * @function
 * @name _reverseIterator
 * @param {Iterable} iterator - The iterator to reverse.
 * @returns {Array} A new array with elements from the iterator in reverse order.
 * @description
 * This function consumes an iterator and returns a new array with all elements
 * in reverse order.
 */
export function _reverseIterator(iterator) {
    const iter = iterator[Symbol.iterator]();
    const arr = [];

    let curr = iter.next();

    while (curr.done === false) {
        arr.push(curr.value);

        curr = iter.next();
    }

    return _reverseArray(arr);
}
