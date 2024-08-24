/**
 * Represents a Lazy computation that defers evaluation until explicitly requested.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 * @implements {Comonad}
 */
export class Lazy implements Functor, Apply, Applicative, Chain, Monad, Comonad {
    /**
     * Creates a Lazy that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Lazy} A new Lazy instance.
     */
    static of(value: any): Lazy;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Lazy} A new Lazy instance.
     */
    static "fantasy-land/of"(value: any): Lazy;
    /**
     * Creates an instance of Lazy.
     * @param {function(): *} computation - A function representing a deferred computation.
     */
    constructor(computation: () => any);
    computation: () => any;
    /**
     * Evaluates the lazy computation.
     * @returns {*} The result of the computation.
     */
    evaluate(): any;
    /**
     * Maps a function over this Lazy computation.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    map(fn: (arg0: any) => any): Lazy;
    /**
     * Applies the function inside another Lazy to the value inside this Lazy.
     * @param {Lazy} other - Another Lazy instance.
     * @returns {Lazy} A new Lazy instance.
     */
    ap(other: Lazy): Lazy;
    /**
     * Chains this Lazy with a function that returns a Lazy.
     * @param {function(*): Lazy} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    chain(fn: (arg0: any) => Lazy): Lazy;
    /**
     * Extends this Lazy with a function.
     * @param {function(Lazy): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    extend(fn: (arg0: Lazy) => any): Lazy;
    /**
     * Fantasy-land compliant extract method.
     * @returns {*} The result of the computation.
     */
    "fantasy-land/extract"(): any;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): Lazy;
    /**
     * Fantasy-land compliant ap method.
     * @param {Lazy} other - Another Lazy instance.
     * @returns {Lazy} A new Lazy instance.
     */
    "fantasy-land/ap"(other: Lazy): Lazy;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Lazy} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => Lazy): Lazy;
    /**
     * Fantasy-land compliant extend method.
     * @param {function(Lazy): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    "fantasy-land/extend"(fn: (arg0: Lazy) => any): Lazy;
}
