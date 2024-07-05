import { _curry1, _reverseArray, _reverseString } from "../utils";
import { _reverseIterator } from "../utils/_reverse-iterator/_reverse-iterator";

var reverse = _curry1(function reverse(collection) {
    if (typeof collection === "string") {
        return _reverseString(collection);
    }

    if (typeof collection[Symbol.iterator] === "function") {
        return _reverseIterator(collection);
    }

    if (Array.isArray(collection)) {
        return _reverseArray(collection);
    }

    if (typeof collection.reverse === "function") {
        return collection.reverse();
    }

    throw new TypeError("Cannot reverse a received value");
});

export default reverse;
