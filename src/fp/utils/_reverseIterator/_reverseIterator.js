import { _reverseArray } from "../_reverseArray";

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
