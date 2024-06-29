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
 * Curry function that partially applies arguments until all required arguments are provided.
 *
 * @param {T} fn - The function to be curried.
 * @return {Curried<T>} The curried function.
 */
export const curry = <T extends (...args: any) => any>(fn: T): Curried<T> => {
    if (!fn.length) {
        return fn();
    }
    return (arg: CurryFirst<T>): CurryRest<T> => {
        return curry(fn.bind(null, arg) as any) as any;
    };
};
