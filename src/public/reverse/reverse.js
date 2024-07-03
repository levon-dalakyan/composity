import { _curry1, _reverseArray, _reverseString } from "../../private";
import { _reverseIterator } from "../../private/_reverseIterator/_reverseIterator";

function reverse(collection) {
    if (typeof collection === "string") {
        return _reverseString(collection);
    }

    if (collection[Symbol.iterator] != null) {
        return _reverseIterator(collection);
    }

    if (Array.isArray(collection)) {
        return _reverseArray(collection);
    }

    if (typeof collection.reverse === "function") {
        return collection.reverse();
    }

    throw new TypeError("Cannot reverse a received value");
}

export default reverse;
