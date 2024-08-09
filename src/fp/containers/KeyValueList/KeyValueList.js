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
export class KeyValueList {
    /**
     * Creates an instance of KeyValueList.
     * @param {Array<[*, *]>} [entries=[]] - An array of key-value pairs to initialize the list.
     */
    constructor(entries = []) {
        this._map = new Map(entries);
    }

    /**
     * Gets the value associated with the specified key.
     * @param {*} key - The key to look up.
     * @returns {*} The value associated with the key, or undefined if the key doesn't exist.
     */
    get(key) {
        return this._map.get(key);
    }

    /**
     * Checks if the list contains the specified key.
     * @param {*} key - The key to check for.
     * @returns {boolean} True if the key exists, false otherwise.
     */
    has(key) {
        return this._map.has(key);
    }

    /**
     * Creates a new KeyValueList with the specified key-value pair added or updated.
     * @param {*} key - The key to set.
     * @param {*} value - The value to associate with the key.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    set(key, value) {
        const newMap = new Map(this._map);
        newMap.set(key, value);
        return new KeyValueList(newMap);
    }

    /**
     * Creates a new KeyValueList with the specified key removed.
     * @param {*} key - The key to remove.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    delete(key) {
        const newMap = new Map(this._map);
        newMap.delete(key);
        return new KeyValueList(newMap);
    }

    /**
     * Gets the number of key-value pairs in the list.
     * @returns {number} The size of the list.
     */
    get size() {
        return this._map.size;
    }

    /**
     * Maps a function over the values of this KeyValueList.
     * @param {function(*, *): *} fn - Function to apply to each value-key pair.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the functions in another KeyValueList to the values in this KeyValueList.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this KeyValueList with a function that returns a KeyValueList.
     * @param {function(*, *): KeyValueList} fn - Function to apply.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Maps functions over both keys and values of this KeyValueList.
     * @param {function(*): *} fnK - Function to apply to keys.
     * @param {function(*): *} fnV - Function to apply to values.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    bimap(fnK, fnV) {
        return this["fantasy-land/bimap"](fnK, fnV);
    }

    /**
     * Concatenates this KeyValueList with another.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    concat(other) {
        return this["fantasy-land/concat"](other);
    }

    /**
     * Reduces the KeyValueList to a single value.
     * @param {function(*, *, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn, initial) {
        return this["fantasy-land/reduce"](fn, initial);
    }

    /**
     * Checks if this KeyValueList is equal to another.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    /**
     * Creates a KeyValueList containing a single key-value pair.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    static of(value) {
        return KeyValueList["fantasy-land/of"](value);
    }

    /**
     * Creates an empty KeyValueList.
     * @static
     * @returns {KeyValueList} An empty KeyValueList instance.
     */
    static empty() {
        return KeyValueList["fantasy-land/empty"]();
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*, *): *} fn - Function to apply to each value-key pair.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ["fantasy-land/map"](fn) {
        return new KeyValueList(
            Array.from(this._map, ([k, v]) => [k, fn(v, k)])
        );
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ["fantasy-land/ap"](other) {
        const resMap = new Map();

        for (const [k, v] of this._map) {
            if (other.has(k)) {
                resMap.set(k, other._map.get(k)(v));
            }
        }

        return new KeyValueList(resMap);
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*, *): KeyValueList} fn - Function to apply.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ["fantasy-land/chain"](fn) {
        const resMap = new Map();

        for (const [k, v] of this._map) {
            const newKVList = fn(v, k);

            for (const [k2, v2] of newKVList.map) {
                resMap.set(k2, v2);
            }
        }

        return new KeyValueList(resMap);
    }

    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} fnK - Function to apply to keys.
     * @param {function(*): *} fnV - Function to apply to values.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ["fantasy-land/bimap"](fnK, fnV) {
        return new KeyValueList(
            Array.from(this._map, ([k, v]) => [fnK(k), fnV(v)])
        );
    }

    /**
     * Fantasy-land compliant concat method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    ["fantasy-land/concat"](other) {
        return new KeyValueList([...this._map, ...other._map]);
    }

    /**
     * Fantasy-land compliant reduce method.
     * @param {function(*, *, *): *} fn - Reducer function.
     * @param {*} initial - Initial value.
     * @returns {*} The reduced value.
     */
    ["fantasy-land/reduce"](fn, initial) {
        let result = initial;

        for (const [k, v] of this._map) {
            result = fn(result, v, k);
        }

        return result;
    }

    /**
     * Fantasy-land compliant equals method.
     * @param {KeyValueList} other - Another KeyValueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    ["fantasy-land/equals"](other) {
        if (!(other instanceof KeyValueList) || this.size !== other.size)
            return false;

        for (const [k, v] of this._map) {
            if (!other.has(k) || other.get(k) !== v) return false;
        }

        return true;
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {KeyValueList} A new KeyValueList instance.
     */
    static ["fantasy-land/of"](value) {
        return new KeyValueList([["_", value]]);
    }

    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {KeyValueList} An empty KeyValueList instance.
     */
    static ["fantasy-land/empty"]() {
        return new KeyValueList();
    }

    /**
     * Makes KeyValueList iterable.
     * @returns {Iterator} An iterator for the key-value pairs.
     */
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }

    /**
     * Returns a string representation of the KeyValueList.
     * @returns {string} String representation.
     */
    toString() {
        return `KeyValueList(${JSON.stringify(Object.fromEntries(this._map))})`;
    }
}
