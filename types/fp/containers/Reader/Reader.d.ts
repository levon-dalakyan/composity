/**
 * Represents a Reader monad for handling computations with a shared environment.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class Reader implements Functor, Apply, Applicative, Chain, Monad {
    /**
     * Creates a Reader that returns the environment itself.
     * @static
     * @returns {Reader} A new Reader instance.
     */
    static ask(): Reader;
    /**
     * Creates a Reader that applies a function to the environment.
     * @static
     * @param {function(*): *} fn - Function to apply to the environment.
     * @returns {Reader} A new Reader instance.
     */
    static asks(fn: (arg0: any) => any): Reader;
    /**
     * Creates a Reader that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Reader} A new Reader instance.
     */
    static of(value: any): Reader;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Reader} A new Reader instance.
     */
    static "fantasy-land/of"(value: any): Reader;
    /**
     * Creates an instance of Reader.
     * @param {function(*): *} run - A function that takes an environment and returns a value.
     */
    constructor(run: (arg0: any) => any);
    run: (arg0: any) => any;
    /**
     * Runs the Reader with a given environment.
     * @param {*} env - The environment to run the Reader with.
     * @returns {*} The result of running the Reader with the given environment.
     */
    runWith(env: any): any;
    /**
     * Maps a function over this Reader.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    map(fn: (arg0: any) => any): Reader;
    /**
     * Applies the function inside another Reader to the value inside this Reader.
     * @param {Reader} other - Another Reader instance.
     * @returns {Reader} A new Reader instance.
     */
    ap(other: Reader): Reader;
    /**
     * Chains this Reader with a function that returns a Reader.
     * @param {function(*): Reader} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    chain(fn: (arg0: any) => Reader): Reader;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): Reader;
    /**
     * Fantasy-land compliant ap method.
     * @param {Reader} other - Another Reader instance.
     * @returns {Reader} A new Reader instance.
     */
    "fantasy-land/ap"(other: Reader): Reader;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Reader} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => Reader): Reader;
}
