import { _reduceArray } from "../_reduceArray";
import { _reduceByMethod } from "../_reduceByMethod";
import { _reduceIterator } from "../_reduceIterator";
import { NextObj } from "../types";

export function _createReduce(
    reduceArray: typeof _reduceArray,
    reduceIterator: typeof _reduceIterator,
    reduceByMethod: typeof _reduceByMethod
) {
    return function _reduce<F extends (...args: any) => any>(
        collection: unknown,
        reducer: F,
        init: any
    ) {
        if (collection == null) {
            return init;
        }

        if (Array.isArray(collection)) {
            return reduceArray(collection, reducer, init);
        }

        if ((collection as Iterable<any>)[Symbol.iterator] != null) {
            return reduceIterator(collection as Iterator<any>, reducer, init);
        }

        if (typeof (collection as NextObj<any>).next === "function") {
            return reduceIterator(collection as NextObj<any>, reducer, init);
        }

        if (typeof (collection as any).reduce === "function") {
            return reduceByMethod("reduce", collection, reducer, init);
        }

        throw new TypeError("Cannot reduce a non-iterable object");
    };
}
