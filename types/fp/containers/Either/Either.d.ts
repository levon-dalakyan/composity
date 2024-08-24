/**
 * Represents an Either monad, which can be either a Right (success) or Left (failure) value.
 * @class
 * @implements {Functor}
 * @implements {Chain}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Bifunctor}
 * @implements {Extend}
 * @implements {Setoid}
 */
export class Either implements Functor, Chain, Apply, Applicative, Bifunctor, Extend, Setoid {
    /**
     * Creates a Right Either.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Right Either instance.
     */
    static Right(value: any): Either;
    /**
     * Creates a Left Either.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Left Either instance.
     */
    static Left(value: any): Either;
    /**
     * Creates an Either from a value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Either instance.
     */
    static of(value: any): Either;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Right Either instance.
     */
    static "fantasy-land/of"(value: any): Either;
    /**
     * Creates an instance of Either.
     * @param {boolean} isRight - Indicates if this is a Right value.
     * @param {*} value - The wrapped value.
     */
    constructor(isRight: boolean, value: any);
    _isRight: boolean;
    _value: any;
    /**
     * Applies a function based on whether this is a Right or Left value.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {*} The result of applying the appropriate function.
     */
    fold(fnLeft: (arg0: any) => any, fnRight: (arg0: any) => any): any;
    /**
     * Maps a function over this Either.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    map(fn: (arg0: any) => any): Either;
    /**
     * Chains this Either with a function that returns an Either.
     * @param {function(*): Either} fn - Function to apply.
     * @returns {Either} The result of applying the function.
     */
    chain(fn: (arg0: any) => Either): Either;
    /**
     * Applies the function inside another Either to the value inside this Either.
     * @param {Either} other - Another Either instance.
     * @returns {Either} A new Either instance.
     */
    ap(other: Either): Either;
    /**
     * Maps both sides of this Either.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {Either} A new Either instance.
     */
    bimap(fnLeft: (arg0: any) => any, fnRight: (arg0: any) => any): Either;
    /**
     * Extends this Either with a function.
     * @param {function(Either): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    extend(fn: (arg0: Either) => any): Either;
    /**
     * Checks equality with another Either.
     * @param {Either} other - Another Either instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other: Either): boolean;
    /**
     * Checks if this is a Right value.
     * @returns {boolean} True if Right, false if Left.
     */
    isRight(): boolean;
    /**
     * Checks if this is a Left value.
     * @returns {boolean} True if Left, false if Right.
     */
    isLeft(): boolean;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): Either;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Either} fn - Function to apply.
     * @returns {Either} The result of applying the function.
     */
    "fantasy-land/chain"(fn: (arg0: any) => Either): Either;
    /**
     * Fantasy-land compliant ap method.
     * @param {Either} other - Another Either instance.
     * @returns {Either} A new Either instance.
     */
    "fantasy-land/ap"(other: Either): Either;
    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {Either} A new Either instance.
     */
    "fantasy-land/bimap"(fnLeft: (arg0: any) => any, fnRight: (arg0: any) => any): Either;
    /**
     * Fantasy-land compliant extend method.
     * @param {function(Either): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    "fantasy-land/extend"(fn: (arg0: Either) => any): Either;
    /**
     * Fantasy-land compliant equals method.
     * @param {Either} other - Another Either instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    "fantasy-land/equals"(other: Either): boolean;
    /**
     * Returns a string representation of this Either.
     * @returns {string} String representation.
     */
    toString(): string;
}
