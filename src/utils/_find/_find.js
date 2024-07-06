import { _isArray } from "../_is-array";

export function _find(pred, coll) {
    if (_isArray(coll) || typeof coll === "string") {
        for (let i = 0; i <= coll.length; i++) {
            if (pred(coll[i])) {
                return coll[i];
            }
        }

        return undefined;
    }

    if (typeof coll[Symbol.iterator] === "function") {
        const iter = coll[Symbol.iterator]();

        let cur = iter.next();

        while (cur.done === false) {
            if (pred(cur.value)) {
                return cur.value;
            }

            cur = iter.next();
        }

        return undefined;
    }

    throw new TypeError(
        "The coll must be either an array, a string, or an iterable object"
    );
}
