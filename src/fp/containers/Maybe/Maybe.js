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
export class Maybe {
    /**
     * Creates an instance of Maybe.
     * @param {*} value - The wrapped value.
     */
    constructor(value) {
        this._value = value;
    }

    /**
     * Returns the value if it's Some, or the provided default value if it's None.
     * @param {*} defaultValue - The default value to return if this is None.
     * @returns {*} The wrapped value or the default value.
     */
    getOrElse(defaultValue) {
        return this.isNone() ? defaultValue : this._value;
    }

    /**
     * Maps a function over this Maybe.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Chains this Maybe with a function that returns a Maybe.
     * @param {function(*): Maybe} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Applies the function inside another Maybe to the value inside this Maybe.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} A new Maybe instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Filters the Maybe based on a predicate function.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {Maybe} A new Maybe instance.
     */
    filter(pred) {
        return this.isEmpty() || !pred(this._value) ? Maybe.empty() : this;
    }

    /**
     * Returns this Maybe if it's Some, otherwise returns the other Maybe.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} This Maybe or the other Maybe.
     */
    alt(other) {
        return this["fantasy-land/alt"](other);
    }

    /**
     * Extends this Maybe with a function.
     * @param {function(Maybe): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    extend(fn) {
        return this["fantasy-land/extend"](fn);
    }

    /**
     * Flattens a nested Maybe.
     * @returns {Maybe} A flattened Maybe instance.
     */
    join() {
        return this["fantasy-land/join"]();
    }

    /**
     * Checks if this Maybe is equal to another.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    /**
     * Checks if this Maybe is None.
     * @returns {boolean} True if None, false if Some.
     */
    isNone() {
        return this._value === null || this._value === undefined;
    }

    /**
     * Checks if this Maybe is Some.
     * @returns {boolean} True if Some, false if None.
     */
    isSome() {
        return !this.isNone();
    }

    /**
     * Creates a Some Maybe.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Maybe} A new Some Maybe instance.
     * @throws {Error} If value is null or undefined.
     */
    static Some(value) {
        if (value === null || value === undefined) {
            throw new Error("Some cannot contain null or undefined");
        }

        return new Maybe(value);
    }

    /**
     * Creates a None Maybe.
     * @static
     * @returns {Maybe} A new None Maybe instance.
     */
    static None() {
        return new Maybe(null);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    ["fantasy-land/map"](fn) {
        return this.isNone() ? Maybe.None() : Maybe.Some(fn(this._value));
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Maybe} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    ["fantasy-land/chain"](fn) {
        return this.isNone() ? Maybe.None() : fn(this._value);
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} A new Maybe instance.
     */
    ["fantasy-land/ap"](other) {
        return this.isNone() || other.isNone()
            ? Maybe.None()
            : this["fantasy-land/map"](other._value);
    }

    /**
     * Fantasy-land compliant alt method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {Maybe} This Maybe or the other Maybe.
     */
    ["fantasy-land/alt"](other) {
        return this.isNone() ? other : this;
    }

    /**
     * Fantasy-land compliant extend method.
     * @param {function(Maybe): *} fn - Function to apply.
     * @returns {Maybe} A new Maybe instance.
     */
    ["fantasy-land/extend"](fn) {
        return this.isNone() ? Maybe.None() : Maybe.Some(fn(this));
    }

    /**
     * Fantasy-land compliant join method.
     * @returns {Maybe} A flattened Maybe instance.
     */
    ["fantasy-land/join"]() {
        return this.isNone()
            ? Maybe.None()
            : this._value instanceof Maybe
              ? this._value
              : this;
    }

    /**
     * Fantasy-land compliant equals method.
     * @param {Maybe} other - Another Maybe instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    ["fantasy-land/equals"](other) {
        if (!(other instanceof Maybe)) return false;
        if (this.isNone() && other.isNone()) return true;
        if (this.isNone() || other.isNone()) return false;

        return this._value === other._value;
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Maybe} A new Some Maybe instance.
     */
    static ["fantasy-land/of"](value) {
        return Maybe.Some(value);
    }

    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {Maybe} A new None Maybe instance.
     */
    static ["fantasy-land/empty"]() {
        return Maybe.None();
    }

    /**
     * Returns a string representation of the Maybe.
     * @returns {string} String representation.
     */
    toString() {
        return this.isNone() ? "None" : `Some(${this._value})`;
    }
}
