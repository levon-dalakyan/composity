type CurryFirst<T> = T extends (x: infer U, ...rest: any) => any ? U : never;
type CurryRest<T> = T extends (x: infer U) => infer V
    ? U
    : T extends (x: infer U, ...rest: infer V) => infer W
    ? Curried<(...args: V) => W>
    : never;

type Curried<T extends (...args: any) => any> = (
    x: CurryFirst<T>
) => CurryRest<T>;

/**
 * Curry function
 * @param fn - Function to be curried
 * @returns Curried function
 */
export const curry = <T extends (...args: any) => any>(fn: T): Curried<T> => {
    // If the function has no arguments, execute it
    if (!fn.length) {
        return fn();
    }

    /**
     * Curried function
     * @param arg - Argument to be passed to the function
     * @returns Curried function
     */
    return (...args: CurryFirst<T>[]): CurryRest<T> => {
        // Bind the argument to the function and recursively curry the rest
        return curry(fn.bind(null, ...args) as any) as any;
    };
};
