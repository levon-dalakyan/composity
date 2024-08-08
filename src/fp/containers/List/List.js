/**
 * Represents an immutable list with various functional programming capabilities.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 * @implements {Semigroup}
 * @implements {Monoid}
 * @implements {Foldable}
 * @implements {Filterable}
 * @implements {Setoid}
 * @implements {Alt}
 * @implements {Plus}
 * @implements {Alternative}
 */
export class List {
    /**
     * Creates an instance of List.
     * @param {Array} [values=[]] - An array of values to initialize the list.
     */
    constructor(values = []) {
        this._list = values;
    }

    /**
     * Maps a function over this List.
     * @param {function(*): *} fn - Function to apply to each value.
     * @returns {List} A new List instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the functions in another List to the values in this List.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this List with a function that returns a List.
     * @param {function(*): List} fn - Function to apply.
     * @returns {List} A new List instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Concatenates this List with another.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    concat(other) {
        return this["fantasy-land/concat"](other);
    }

    /**
     * Reduces the List to a single value.
     * @param {function(*, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn, initial) {
        return this["fantasy-land/reduce"](fn, initial);
    }

    /**
     * Filters the List based on a predicate function.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {List} A new filtered List instance.
     */
    filter(pred) {
        return this["fantasy-land/filter"](pred);
    }

    /**
     * Checks if this List is equal to another.
     * @param {List} other - Another List instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    /**
     * Combines this List with another, keeping all elements.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    alt(other) {
        return this["fantasy-land/alt"](other);
    }

    /**
     * Creates a List containing a single value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {List} A new List instance.
     */
    static of(value) {
        return List["fantasy-land/of"](value);
    }

    /**
     * Creates an empty List.
     * @static
     * @returns {List} An empty List instance.
     */
    static empty() {
        return List["fantasy-land/empty"]();
    }

    /**
     * Creates an empty List.
     * @static
     * @returns {List} An empty List instance.
     */
    static zero() {
        return List["fantasy-land/zero"]();
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply to each value.
     * @returns {List} A new List instance.
     */
    ["fantasy-land/map"](fn) {
        return new List(this._list.map(fn));
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    ["fantasy-land/ap"](other) {
        return new List(
            this._list.flatMap((value) => other._list.map((fn) => fn(value)))
        );
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): List} fn - Function to apply.
     * @returns {List} A new List instance.
     */
    ["fantasy-land/chain"](fn) {
        return new List(this._list.flatMap((value) => fn(value).values));
    }

    /**
     * Fantasy-land compliant concat method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    ["fantasy-land/concat"](other) {
        return new List(this._list.concat(other._list));
    }

    /**
     * Fantasy-land compliant reduce method.
     * @param {function(*, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    ["fantasy-land/reduce"](fn, initial) {
        return this._list.reduce(fn, initial);
    }

    /**
     * Fantasy-land compliant filter method.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {List} A new filtered List instance.
     */
    ["fantasy-land/filter"](pred) {
        return new List(this._list.filter(pred));
    }

    /**
     * Fantasy-land compliant equals method.
     * @param {List} other - Another List instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    ["fantasy-land/equals"](other) {
        return (
            this._list.length === other._list.length &&
            this._list.every((v, i) => v === other._list[i])
        );
    }

    /**
     * Fantasy-land compliant alt method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    ["fantasy-land/alt"](other) {
        return this["fantasy-land/concat"](other);
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {List} A new List instance.
     */
    static ["fantasy-land/of"](value) {
        return new List([value]);
    }

    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {List} An empty List instance.
     */
    static ["fantasy-land/empty"]() {
        return new List();
    }

    /**
     * Fantasy-land compliant zero method.
     * @static
     * @returns {List} An empty List instance.
     */
    static ["fantasy-land/zero"]() {
        return List["fantasy-land/empty"]();
    }

    /**
     * Makes List iterable.
     * @returns {Iterator} An iterator for the list.
     */
    [Symbol.iterator]() {
        return this._list[Symbol.iterator]();
    }

    /**
     * Returns a string representation of the List.
     * @returns {string} String representation.
     */
    toString() {
        return `List(${this._list})`;
    }
}
