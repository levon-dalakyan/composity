/**
 * Represents a Reader monad for handling computations with a shared environment.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class Reader {
    /**
     * Creates an instance of Reader.
     * @param {function(*): *} run - A function that takes an environment and returns a value.
     */
    constructor(run) {
        this.run = run;
    }

    /**
     * Runs the Reader with a given environment.
     * @param {*} env - The environment to run the Reader with.
     * @returns {*} The result of running the Reader with the given environment.
     */
    runWith(env) {
        return this.run(env);
    }

    /**
     * Creates a Reader that returns the environment itself.
     * @static
     * @returns {Reader} A new Reader instance.
     */
    static ask() {
        return new Reader((env) => env);
    }

    /**
     * Creates a Reader that applies a function to the environment.
     * @static
     * @param {function(*): *} fn - Function to apply to the environment.
     * @returns {Reader} A new Reader instance.
     */
    static asks(fn) {
        return new Reader((env) => fn(env));
    }

    /**
     * Maps a function over this Reader.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the function inside another Reader to the value inside this Reader.
     * @param {Reader} other - Another Reader instance.
     * @returns {Reader} A new Reader instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this Reader with a function that returns a Reader.
     * @param {function(*): Reader} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Creates a Reader that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Reader} A new Reader instance.
     */
    static of(value) {
        return Reader["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    ["fantasy-land/map"](fn) {
        return new Reader((env) => fn(this.run(env)));
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {Reader} other - Another Reader instance.
     * @returns {Reader} A new Reader instance.
     */
    ["fantasy-land/ap"](other) {
        return new Reader((env) => other.run(env)(this.run(env)));
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Reader} fn - Function to apply.
     * @returns {Reader} A new Reader instance.
     */
    ["fantasy-land/chain"](fn) {
        return new Reader((env) => fn(this.run(env)).run(env));
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Reader} A new Reader instance.
     */
    static ["fantasy-land/of"](value) {
        return new Reader(() => value);
    }
}
