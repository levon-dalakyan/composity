/**
 * Represents a Maybe monad, which can be either Some value or None.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 * @implements {Alt}
 * @implements {Plus}
 * @implements {Alternative}
 * @implements {Extend}
 * @implements {Setoid}
 */
export class Maybe implements Functor, Apply, Applicative, Chain, Monad, Alt, Plus, Alternative, Extend, Setoid {
    /**
     * Creates a Some Maybe.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Maybe} A new Some Maybe instance.
     * @throws {Error} If value is null or undefined.
     */
    static Some(value: any): Maybe;
    /**
     * Creates a None Maybe.
     * @static
     * @returns {Maybe} A new None Maybe instance.
     */
    static None(): Maybe;
    static empty(): Maybe;
    static of(value: any): Maybe;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Maybe} A new Some Maybe instance.
     */
    static "fantasy-land/of"(value: any): Maybe;
    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {Maybe} A new None Maybe instance.
     */
    static "fantasy-land/empty"(): Maybe;
    /**
     * Creates an instance of Maybe.
     * @param {*} value - The wrapped value.
     */
    constructor(value: any);
    _value: any;
    /**
     * Returns the value if it's Some, or the provided default value if it's None.
     * @param {*} defaultValue - The default value to return if this is None.
     * @returns {*} The wrapped value or the default value.
     */
    getOrElse(defaultValue: any): any;
    /**
     * Maps a function over this Maybe.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    map(fn: (arg0: any) => any): Maybe;
    /**
     * Chains this Maybe with a function that returns a Maybe.
     * @param {function(*): Maybe} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    chain(fn: (arg0: any) => Maybe): Maybe;
    /**
     * Applies the function inside another Maybe to the value inside this Maybe.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} A new Maybe instance.
     */
    ap(other: Maybe): Maybe;
    /**
     * Filters the Maybe based on a predicate function.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {Maybe} A new Maybe instance.
     */
    filter(pred: (arg0: any) => boolean): Maybe;
    /**
     * Returns this Maybe if it's Some, otherwise returns the other Maybe.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} This Maybe or the other Maybe.
     */
    alt(other: Maybe): Maybe;
    /**
     * Extends this Maybe with a function.
     * @param {function(Maybe): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    extend(fn: (arg0: Maybe) => any): Maybe;
    /**
     * Flattens a nested Maybe.
     * @returns {Maybe} A flattened Maybe instance.
     */
    join(): Maybe;
    /**
     * Checks if this Maybe is equal to another.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other: Maybe): boolean;
    /**
     * Checks if this Maybe is None.
     * @returns {boolean} True if None, false if Some.
     */
    isNone(): boolean;
    /**
     * Checks if this Maybe is Some.
     * @returns {boolean} True if Some, false if None.
     */
    isSome(): boolean;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): Maybe;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Maybe} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => Maybe): Maybe;
    /**
     * Fantasy-land compliant ap method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} A new Maybe instance.
     */
    "fantasy-land/ap"(other: Maybe): Maybe;
    /**
     * Fantasy-land compliant alt method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} This Maybe or the other Maybe.
     */
    "fantasy-land/alt"(other: Maybe): Maybe;
    /**
     * Fantasy-land compliant extend method.
     * @param {function(Maybe): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    "fantasy-land/extend"(fn: (arg0: Maybe) => any): Maybe;
    /**
     * Fantasy-land compliant join method.
     * @returns {Maybe} A flattened Maybe instance.
     */
    "fantasy-land/join"(): Maybe;
    /**
     * Fantasy-land compliant equals method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    "fantasy-land/equals"(other: Maybe): boolean;
    /**
     * Returns a string representation of the Maybe.
     * @returns {string} String representation.
     */
    toString(): string;
}
