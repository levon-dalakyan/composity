/**
 * Represents an IO (Input/Output) monad for handling side effects.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class IO implements Functor, Apply, Applicative, Chain, Monad {
    /**
     * Creates an IO that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {IO} A new IO instance.
     */
    static of(value: any): IO;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {IO} A new IO instance.
     */
    static "fantasy-land/of"(value: any): IO;
    /**
     * Creates an instance of IO.
     * @param {function(): *} effect - A function representing a side effect.
     */
    constructor(effect: () => any);
    _effect: () => any;
    /**
     * Executes the side effect.
     * @returns {*} The result of executing the side effect.
     */
    run(): any;
    /**
     * Maps a function over this IO.
     * @param {function(*): *} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    map(fn: (arg0: any) => any): IO;
    /**
     * Applies the function inside another IO to the value inside this IO.
     * @param {IO} other - Another IO instance.
     * @returns {IO} A new IO instance.
     */
    ap(other: IO): IO;
    /**
     * Chains this IO with a function that returns an IO.
     * @param {function(*): IO} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    chain(fn: (arg0: any) => IO): IO;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): IO;
    /**
     * Fantasy-land compliant ap method.
     * @param {IO} other - Another IO instance.
     * @returns {IO} A new IO instance.
     */
    "fantasy-land/ap"(other: IO): IO;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): IO} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => IO): IO;
}
