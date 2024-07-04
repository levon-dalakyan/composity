export function _find(pred, collection) {
    if (Array.isArray(collection) || typeof collection === "string") {
        for (let i = 0; i <= collection.length; i++) {
            if (pred(collection[i])) {
                return collection[i];
            }
        }

        return undefined;
    }

    if (typeof collection[Symbol.iterator] === "function") {
        const iter = collection[Symbol.iterator]();

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
        "The collection must be either an array, a string, or an iterable object"
    );
}
