/**
 * Represents an IO (Input/Output) monad for handling side effects.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class IO {
    /**
     * Creates an instance of IO.
     * @param {function(): *} effect - A function representing a side effect.
     */
    constructor(effect) {
        this._effect = effect;
    }

    /**
     * Executes the side effect.
     * @returns {*} The result of executing the side effect.
     */
    run() {
        return this._effect();
    }

    /**
     * Maps a function over this IO.
     * @param {function(*): *} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the function inside another IO to the value inside this IO.
     * @param {IO} other - Another IO instance.
     * @returns {IO} A new IO instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this IO with a function that returns an IO.
     * @param {function(*): IO} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Creates an IO that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {IO} A new IO instance.
     */
    static of(value) {
        return IO["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    ["fantasy-land/map"](fn) {
        return new IO(() => fn(this._effect()));
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {IO} other - Another IO instance.
     * @returns {IO} A new IO instance.
     */
    ["fantasy-land/ap"](other) {
        return new IO(() => other._effect()(this._effect()));
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): IO} fn - Function to apply.
     * @returns {IO} A new IO instance.
     */
    ["fantasy-land/chain"](fn) {
        return new IO(() => fn(this._effect())._effect());
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {IO} A new IO instance.
     */
    static ["fantasy-land/of"](value) {
        return new IO(() => value);
    }
}
