export function _createReduce(reduceArray, reduceIterator, reduceByMethod) {
    return function _reduce(reducer, init, collection) {
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
