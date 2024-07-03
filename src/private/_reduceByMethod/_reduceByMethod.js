export function _reduceByMethod(methodName, obj, reducer, init) {
    return obj[methodName]?.(reducer, init);
}
