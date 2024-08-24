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
export class List implements Functor, Apply, Applicative, Chain, Monad, Semigroup, Monoid, Foldable, Filterable, Setoid, Alt, Plus, Alternative {
    /**
     * Creates a List containing a single value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {List} A new List instance.
     */
    static of(value: any): List;
    /**
     * Creates an empty List.
     * @static
     * @returns {List} An empty List instance.
     */
    static empty(): List;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {List} A new List instance.
     */
    static "fantasy-land/of"(value: any): List;
    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {List} An empty List instance.
     */
    static "fantasy-land/empty"(): List;
    /**
     * Creates an instance of List.
     * @param {Array} [values=[]] - An array of values to initialize the list.
     */
    constructor(values?: any[]);
    _list: any[];
    /**
     * Maps a function over this List.
     * @param {function(*): *} fn - Function to apply to each value.
     * @returns {List} A new List instance.
     */
    map(fn: (arg0: any) => any): List;
    /**
     * Applies the functions in another List to the values in this List.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    ap(other: List): List;
    /**
     * Chains this List with a function that returns a List.
     * @param {function(*): List} fn - Function to apply.
     * @returns {List} A new List instance.
     */
    chain(fn: (arg0: any) => List): List;
    /**
     * Concatenates this List with another.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    concat(other: List): List;
    /**
     * Reduces the List to a single value.
     * @param {function(*, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn: (arg0: any, arg1: any) => any, initial: any): any;
    /**
     * Filters the List based on a predicate function.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {List} A new filtered List instance.
     */
    filter(pred: (arg0: any) => boolean): List;
    /**
     * Checks if this List is equal to another.
     * @param {List} other - Another List instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other: List): boolean;
    /**
     * Combines this List with another, keeping all elements.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    alt(other: List): List;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply to each value.
     * @returns {List} A new List instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): List;
    /**
     * Fantasy-land compliant ap method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    "fantasy-land/ap"(other: List): List;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): List} fn - Function to apply.
     * @returns {List} A new List instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => List): List;
    /**
     * Fantasy-land compliant concat method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    "fantasy-land/concat"(other: List): List;
    /**
     * Fantasy-land compliant reduce method.
     * @param {function(*, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    "fantasy-land/reduce"(fn: (arg0: any, arg1: any) => any, initial: any): any;
    /**
     * Fantasy-land compliant filter method.
     * @param {function(*): boolean} pred - Predicate function.
     * @returns {List} A new filtered List instance.
     */
    "fantasy-land/filter"(pred: (arg0: any) => boolean): List;
    /**
     * Fantasy-land compliant equals method.
     * @param {List} other - Another List instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    "fantasy-land/equals"(other: List): boolean;
    /**
     * Fantasy-land compliant alt method.
     * @param {List} other - Another List instance.
     * @returns {List} A new List instance.
     */
    "fantasy-land/alt"(other: List): List;
    /**
     * Returns a string representation of the List.
     * @returns {string} String representation.
     */
    toString(): string;
    /**
     * Makes List iterable.
     * @returns {Iterator} An iterator for the list.
     */
    [Symbol.iterator](): Iterator<any, any, undefined>;
}
