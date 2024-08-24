/**
 * Represents an immutable key-value list with various functional programming capabilities.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 * @implements {Bifunctor}
 * @implements {Semigroup}
 * @implements {Monoid}
 * @implements {Foldable}
 * @implements {Setoid}
 */
export class KeyValueList implements Functor, Apply, Applicative, Chain, Monad, Bifunctor, Semigroup, Monoid, Foldable, Setoid {
    /**
     * Creates a KeyValueList containing a single key-value pair.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    static of(value: any): KeyValueList;
    /**
     * Creates an empty KeyValueList.
     * @static
     * @returns {KeyValueList} An empty KeyValueList instance.
     */
    static empty(): KeyValueList;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    static "fantasy-land/of"(value: any): KeyValueList;
    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {KeyValueList} An empty KeyValueList instance.
     */
    static "fantasy-land/empty"(): KeyValueList;
    /**
     * Creates an instance of KeyValueList.
     * @param {Array<[*, *]>} [entries=[]] - An array of key-value pairs to initialize the list.
     */
    constructor(entries?: Array<[any, any]>);
    _map: Map<any, any>;
    /**
     * Gets the value associated with the specified key.
     * @param {*} key - The key to look up.
     * @returns {*} The value associated with the key, or undefined if the key doesn't exist.
     */
    get(key: any): any;
    /**
     * Checks if the list contains the specified key.
     * @param {*} key - The key to check for.
     * @returns {boolean} True if the key exists, false otherwise.
     */
    has(key: any): boolean;
    /**
     * Creates a new KeyValueList with the specified key-value pair added or updated.
     * @param {*} key - The key to set.
     * @param {*} value - The value to associate with the key.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    set(key: any, value: any): KeyValueList;
    /**
     * Creates a new KeyValueList with the specified key removed.
     * @param {*} key - The key to remove.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    delete(key: any): KeyValueList;
    /**
     * Gets the number of key-value pairs in the list.
     * @returns {number} The size of the list.
     */
    get size(): number;
    /**
     * Maps a function over the values of this KeyValueList.
     * @param {function(*, *): *} fn - Function to apply to each value-key pair.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    map(fn: (arg0: any, arg1: any) => any): KeyValueList;
    /**
     * Applies the functions in another KeyValueList to the values in this KeyValueList.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ap(other: KeyValueList): KeyValueList;
    /**
     * Chains this KeyValueList with a function that returns a KeyValueList.
     * @param {function(*, *): KeyValueList} fn - Function to apply.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    chain(fn: (arg0: any, arg1: any) => KeyValueList): KeyValueList;
    /**
     * Maps functions over both keys and values of this KeyValueList.
     * @param {function(*): *} fnK - Function to apply to keys.
     * @param {function(*): *} fnV - Function to apply to values.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    bimap(fnK: (arg0: any) => any, fnV: (arg0: any) => any): KeyValueList;
    /**
     * Concatenates this KeyValueList with another.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    concat(other: KeyValueList): KeyValueList;
    /**
     * Reduces the KeyValueList to a single value.
     * @param {function(*, *, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn: (arg0: any, arg1: any, arg2: any) => any, initial: any): any;
    /**
     * Checks if this KeyValueList is equal to another.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other: KeyValueList): boolean;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*, *): *} fn - Function to apply to each value-key pair.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    "fantasy-land/map"(fn: (arg0: any, arg1: any) => any): KeyValueList;
    /**
     * Fantasy-land compliant ap method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    "fantasy-land/ap"(other: KeyValueList): KeyValueList;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*, *): KeyValueList} fn - Function to apply.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    "fantasy-land/chain"(fn: (arg0: any, arg1: any) => KeyValueList): KeyValueList;
    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} fnK - Function to apply to keys.
     * @param {function(*): *} fnV - Function to apply to values.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    "fantasy-land/bimap"(fnK: (arg0: any) => any, fnV: (arg0: any) => any): KeyValueList;
    /**
     * Fantasy-land compliant concat method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    "fantasy-land/concat"(other: KeyValueList): KeyValueList;
    /**
     * Fantasy-land compliant reduce method.
     * @param {function(*, *, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    "fantasy-land/reduce"(fn: (arg0: any, arg1: any, arg2: any) => any, initial: any): any;
    /**
     * Fantasy-land compliant equals method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    "fantasy-land/equals"(other: KeyValueList): boolean;
    /**
     * Returns a string representation of the KeyValueList.
     * @returns {string} String representation.
     */
    toString(): string;
    /**
     * Makes KeyValueList iterable.
     * @returns {Iterator} An iterator for the key-value pairs.
     */
    [Symbol.iterator](): Iterator<any, any, undefined>;
}
