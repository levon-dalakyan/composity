import { _reduceArray } from "../_reduceArray";
import { _reduceByMethod } from "../_reduceByMethod";
import { _reduceIterator } from "../_reduceIterator";

export function _createReduce(
    reduceArray: typeof _reduceArray,
    reduceIterator: typeof _reduceIterator,
    reduceByMethod: typeof _reduceByMethod
) {
    return function _reduce<T, U>(
        collection: any,
        reducer: (acc: U, value: T) => U,
        init: U
    ): U {
        if (collection == null) {
            return init;
        }

        if (Array.isArray(collection)) {
            return reduceArray(collection, reducer, init);
        }

        if (collection[Symbol.iterator] != null) {
            return reduceIterator(collection, reducer, init);
        }

        if (typeof collection.next === "function") {
            return reduceIterator(collection, reducer, init);
        }

        if (typeof collection.reduce === "function") {
            return reduceByMethod("reduce", collection, reducer, init);
        }

        throw new TypeError("Cannot reduce a non-iterable object");
    };
}
