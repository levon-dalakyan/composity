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
export class Lazy {
    /**
     * Creates an instance of Lazy.
     * @param {function(): *} computation - A function representing a deferred computation.
     */
    constructor(computation) {
        this.computation = computation;
    }

    /**
     * Evaluates the lazy computation.
     * @returns {*} The result of the computation.
     */
    evaluate() {
        return this.computation();
    }

    /**
     * Extracts the value from the Lazy computation.
     * @returns {*} The result of the computation.
     */
    extract() {
        return this["fantasy-land/extract"]();
    }

    /**
     * Maps a function over this Lazy computation.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the function inside another Lazy to the value inside this Lazy.
     * @param {Lazy} other - Another Lazy instance.
     * @returns {Lazy} A new Lazy instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this Lazy with a function that returns a Lazy.
     * @param {function(*): Lazy} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Extends this Lazy with a function.
     * @param {function(Lazy): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    extend(fn) {
        return this["fantasy-land/extend"](fn);
    }

    /**
     * Creates a Lazy that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Lazy} A new Lazy instance.
     */
    static of(value) {
        return Lazy["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant extract method.
     * @returns {*} The result of the computation.
     */
    ["fantasy-land/extract"]() {
        return this.computation();
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    ["fantasy-land/map"](fn) {
        return new Lazy(() => fn(this.computation()));
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {Lazy} other - Another Lazy instance.
     * @returns {Lazy} A new Lazy instance.
     */
    ["fantasy-land/ap"](other) {
        return new Lazy(() => other.evaluate()(this.computation()));
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Lazy} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    ["fantasy-land/chain"](fn) {
        return new Lazy(() => fn(this.computation()).evaluate());
    }

    /**
     * Fantasy-land compliant extend method.
     * @param {function(Lazy): *} fn - Function to apply.
     * @returns {Lazy} A new Lazy instance.
     */
    ["fantasy-land/extend"](fn) {
        return new Lazy(() => fn(this));
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Lazy} A new Lazy instance.
     */
    static ["fantasy-land/of"](value) {
        return new Lazy(() => value);
    }
}
