import { _curry1, _isArray, _reverseArray, _reverseString } from "../utils";
import { _reverseIterator } from "../utils";

var reverse = _curry1(function reverse(coll) {
    if (typeof coll === "string") {
        return _reverseString(coll);
    }

    if (typeof coll[Symbol.iterator] === "function") {
        return _reverseIterator(coll);
    }

    if (_isArray(coll)) {
        return _reverseArray(coll);
    }

    if (typeof coll.reverse === "function") {
        return coll.reverse();
    }

    throw new TypeError("Cannot reverse a received value");
});

export default reverse;
