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
export class Either {
    /**
     * Creates an instance of Either.
     * @param {boolean} isRight - Indicates if this is a Right value.
     * @param {*} value - The wrapped value.
     */
    constructor(isRight, value) {
        this._isRight = isRight;
        this._value = value;
    }

    /**
     * Applies a function based on whether this is a Right or Left value.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {*} The result of applying the appropriate function.
     */
    fold(fnLeft, fnRight) {
        return this.isRight() ? fnRight(this._value) : fnLeft(this._value);
    }

    /**
     * Maps a function over this Either.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Chains this Either with a function that returns an Either.
     * @param {function(*): Either} fn - Function to apply.
     * @returns {Either} The result of applying the function.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Applies the function inside another Either to the value inside this Either.
     * @param {Either} other - Another Either instance.
     * @returns {Either} A new Either instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Maps both sides of this Either.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {Either} A new Either instance.
     */
    bimap(fnLeft, fnRight) {
        return this["fantasy-land/bimap"](fnLeft, fnRight);
    }

    /**
     * Extends this Either with a function.
     * @param {function(Either): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    extend(fn) {
        return this["fantasy-land/extend"](fn);
    }

    /**
     * Checks equality with another Either.
     * @param {Either} other - Another Either instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    /**
     * Checks if this is a Right value.
     * @returns {boolean} True if Right, false if Left.
     */
    isRight() {
        return this._isRight;
    }

    /**
     * Checks if this is a Left value.
     * @returns {boolean} True if Left, false if Right.
     */
    isLeft() {
        return !this._isRight;
    }

    /**
     * Creates a Right Either.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Right Either instance.
     */
    static Right(value) {
        return new Either(true, value);
    }

    /**
     * Creates a Left Either.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Left Either instance.
     */
    static Left(value) {
        return new Either(false, value);
    }

    /**
     * Creates an Either from a value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Either instance.
     */
    static of(value) {
        return Either["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    ["fantasy-land/map"](fn) {
        return this.isRight() ? Either.Right(fn(this._value)) : this;
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Either} fn - Function to apply.
     * @returns {Either} The result of applying the function.
     */
    ["fantasy-land/chain"](fn) {
        return this.isRight() ? fn(this._value) : this;
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {Either} other - Another Either instance.
     * @returns {Either} A new Either instance.
     */
    ["fantasy-land/ap"](other) {
        return this.isRight() ? this["fantasy-land/map"](other._value) : this;
    }

    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} fnLeft - Function to apply if this is a Left.
     * @param {function(*): *} fnRight - Function to apply if this is a Right.
     * @returns {Either} A new Either instance.
     */
    ["fantasy-land/bimap"](fnLeft, fnRight) {
        return this.isRight()
            ? Either.Right(fnRight(this._value))
            : Either.Left(fnLeft(this._value));
    }

    /**
     * Fantasy-land compliant extend method.
     * @param {function(Either): *} fn - Function to apply.
     * @returns {Either} A new Either instance.
     */
    ["fantasy-land/extend"](fn) {
        return this.isRight() ? Either.Right(fn(this)) : this;
    }

    /**
     * Fantasy-land compliant equals method.
     * @param {Either} other - Another Either instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    ["fantasy-land/equals"](other) {
        return (
            other instanceof Either &&
            this.isRight() === other.isRight() &&
            this._value === other._value
        );
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Either} A new Right Either instance.
     */
    static ["fantasy-land/of"](value) {
        return Either.Right(value);
    }

    /**
     * Returns a string representation of this Either.
     * @returns {string} String representation.
     */
    toString() {
        return this.isRight()
            ? `Right(${this._value})`
            : `Left(${this._value})`;
    }
}
