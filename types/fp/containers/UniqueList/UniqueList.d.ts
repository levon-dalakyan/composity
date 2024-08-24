/**
 * Represents an immutable unique list with various functional programming capabilities.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monoid}
 * @implements {Foldable}
 * @implements {Filterable}
 * @implements {Setoid}
 * @implements {Alt}
 * @implements {Plus}
 * @implements {Alternative}
 */
export class UniqueList implements Functor, Apply, Applicative, Chain, Monoid, Foldable, Filterable, Setoid, Alt, Plus, Alternative {
    /**
     * Creates a UniqueList with a single value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {UniqueList} A new UniqueList instance.
     */
    static of(value: any): UniqueList;
    /**
     * Creates an empty UniqueList.
     * @static
     * @returns {UniqueList} An empty UniqueList instance.
     */
    static empty(): UniqueList;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {UniqueList} A new UniqueList instance.
     */
    static "fantasy-land/of"(value: any): UniqueList;
    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {UniqueList} An empty UniqueList instance.
     */
    static "fantasy-land/empty"(): UniqueList;
    /**
     * Creates an instance of UniqueList.
     * @param {Array} [values=[]] - Initial values for the list.
     */
    constructor(values?: any[]);
    _set: Set<any>;
    /**
     * Checks if the list contains a specific value.
     * @param {*} value - The value to check.
     * @returns {boolean} True if the value exists, false otherwise.
     */
    has(value: any): boolean;
    /**
     * Adds a value to the list.
     * @param {*} value - The value to add.
     * @returns {UniqueList} A new UniqueList instance with the added value.
     */
    add(value: any): UniqueList;
    /**
     * Removes a value from the list.
     * @param {*} value - The value to remove.
     * @returns {UniqueList} A new UniqueList instance without the removed value.
     */
    delete(value: any): UniqueList;
    /**
     * Gets the size of the list.
     * @returns {number} The number of unique elements in the list.
     */
    get size(): number;
    /**
     * Maps a function over the list.
     * @param {Function} fn - The function to apply to each element.
     * @returns {UniqueList} A new UniqueList with the mapped values.
     */
    map(fn: Function): UniqueList;
    /**
     * Applies the functions in another list to the values in this list.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new UniqueList with the applied results.
     */
    ap(other: UniqueList): UniqueList;
    /**
     * Chains this list with a function that returns a UniqueList.
     * @param {Function} fn - Function that returns a UniqueList.
     * @returns {UniqueList} A new UniqueList instance.
     */
    chain(fn: Function): UniqueList;
    /**
     * Concatenates this list with another.
     * @param {UniqueList} other - Another UniqueList to concatenate.
     * @returns {UniqueList} A new UniqueList with combined elements.
     */
    concat(other: UniqueList): UniqueList;
    /**
     * Reduces the list to a single value.
     * @param {Function} fn - The reducer function.
     * @param {*} initial - The initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn: Function, initial: any): any;
    /**
     * Filters the list based on a predicate.
     * @param {Function} pred - The predicate function.
     * @returns {UniqueList} A new filtered UniqueList.
     */
    filter(pred: Function): UniqueList;
    /**
     * Checks equality with another UniqueList.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other: UniqueList): boolean;
    /**
     * Combines this list with another, removing duplicates.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new combined UniqueList.
     */
    alt(other: UniqueList): UniqueList;
    /**
     * Fantasy-land compliant map method.
     * @param {Function} fn - The function to apply to each element.
     * @returns {UniqueList} A new UniqueList with the mapped values.
     */
    "fantasy-land/map"(fn: Function): UniqueList;
    /**
     * Fantasy-land compliant ap method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new UniqueList with the applied results.
     */
    "fantasy-land/ap"(other: UniqueList): UniqueList;
    /**
     * Fantasy-land compliant chain method.
     * @param {Function} fn - Function that returns a UniqueList.
     * @returns {UniqueList} A new UniqueList instance.
     */
    "fantasy-land/chain"(fn: Function): UniqueList;
    /**
     * Fantasy-land compliant concat method.
     * @param {UniqueList} other - Another UniqueList to concatenate.
     * @returns {UniqueList} A new UniqueList with combined elements.
     */
    "fantasy-land/concat"(other: UniqueList): UniqueList;
    /**
     * Fantasy-land compliant reduce method.
     * @param {Function} fn - The reducer function.
     * @param {*} initial - The initial value.
     * @returns {*} The reduced value.
     */
    "fantasy-land/reduce"(fn: Function, initial: any): any;
    /**
     * Fantasy-land compliant filter method.
     * @param {Function} pred - The predicate function.
     * @returns {UniqueList} A new filtered UniqueList.
     */
    "fantasy-land/filter"(pred: Function): UniqueList;
    /**
     * Fantasy-land compliant equals method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    "fantasy-land/equals"(other: UniqueList): boolean;
    /**
     * Fantasy-land compliant alt method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new combined UniqueList.
     */
    "fantasy-land/alt"(other: UniqueList): UniqueList;
    /**
     * Returns a string representation of the UniqueList.
     * @returns {string} String representation.
     */
    toString(): string;
    /**
     * Makes UniqueList iterable.
     * @returns {Iterator} An iterator for the set.
     */
    [Symbol.iterator](): Iterator<any, any, undefined>;
}
