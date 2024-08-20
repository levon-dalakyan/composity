import { _isArray } from "../_is-array";

export function _createReduce(reduceArray, reduceIterator, reduceByMethod) {
    return function _reduce(coll, reducer, init) {
        if (coll == null) {
            return init;
        }

        if (_isArray(coll)) {
            return reduceArray(coll, reducer, init);
        }

        if (coll[Symbol.iterator] != null) {
            return reduceIterator(coll, reducer, init);
        }

        if (typeof coll.next === "function") {
            return reduceIterator(coll, reducer, init);
        }

        if (typeof coll.reduce === "function") {
            return reduceByMethod("reduce", coll, reducer, init);
        }

        throw new TypeError("Cannot reduce a non-iterable object");
    };
}
