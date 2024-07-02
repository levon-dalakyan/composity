export function _reduceByMethod<O, F extends (...args: any) => any>(
    methodName: string,
    obj: O,
    reducer: F,
    init: any
) {
    return (obj as any)[methodName]?.(reducer, init) as ReturnType<F>;
}
