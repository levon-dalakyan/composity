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
export class UniqueList {
    /**
     * Creates an instance of UniqueList.
     * @param {Array} [values=[]] - Initial values for the list.
     */
    constructor(values = []) {
        this._set = new Set(values);
    }

    /**
     * Checks if the list contains a specific value.
     * @param {*} value - The value to check.
     * @returns {boolean} True if the value exists, false otherwise.
     */
    has(value) {
        return this._set.has(value);
    }

    /**
     * Adds a value to the list.
     * @param {*} value - The value to add.
     * @returns {UniqueList} A new UniqueList instance with the added value.
     */
    add(value) {
        return new UniqueList([...this._set, value]);
    }

    /**
     * Removes a value from the list.
     * @param {*} value - The value to remove.
     * @returns {UniqueList} A new UniqueList instance without the removed value.
     */
    delete(value) {
        const newSet = new Set(this._set);
        newSet.delete(value);
        return new UniqueList(newSet);
    }

    /**
     * Gets the size of the list.
     * @returns {number} The number of unique elements in the list.
     */
    get size() {
        return this._set.size;
    }

    /**
     * Maps a function over the list.
     * @param {Function} fn - The function to apply to each element.
     * @returns {UniqueList} A new UniqueList with the mapped values.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the functions in another list to the values in this list.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new UniqueList with the applied results.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this list with a function that returns a UniqueList.
     * @param {Function} fn - Function that returns a UniqueList.
     * @returns {UniqueList} A new UniqueList instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Concatenates this list with another.
     * @param {UniqueList} other - Another UniqueList to concatenate.
     * @returns {UniqueList} A new UniqueList with combined elements.
     */
    concat(other) {
        return this["fantasy-land/concat"](other);
    }

    /**
     * Reduces the list to a single value.
     * @param {Function} fn - The reducer function.
     * @param {*} initial - The initial value.
     * @returns {*} The reduced value.
     */
    reduce(fn, initial) {
        return this["fantasy-land/reduce"](fn, initial);
    }

    /**
     * Filters the list based on a predicate.
     * @param {Function} pred - The predicate function.
     * @returns {UniqueList} A new filtered UniqueList.
     */
    filter(pred) {
        return this["fantasy-land/filter"](pred);
    }

    /**
     * Checks equality with another UniqueList.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    /**
     * Combines this list with another, removing duplicates.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new combined UniqueList.
     */
    alt(other) {
        return this["fantasy-land/alt"](other);
    }

    /**
     * Creates a UniqueList with a single value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {UniqueList} A new UniqueList instance.
     */
    static of(value) {
        return UniqueList["fantasy-land/of"](value);
    }

    /**
     * Creates an empty UniqueList.
     * @static
     * @returns {UniqueList} An empty UniqueList instance.
     */
    static empty() {
        return UniqueList["fantasy-land/empty"]();
    }

    /**
     * Fantasy-land compliant map method.
     * @param {Function} fn - The function to apply to each element.
     * @returns {UniqueList} A new UniqueList with the mapped values.
     */
    ["fantasy-land/map"](fn) {
        return new UniqueList(Array.from(this._set, fn));
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new UniqueList with the applied results.
     */
    ["fantasy-land/ap"](other) {
        return new UniqueList(
            Array.from(this._set, (x) =>
                Array.from(other._set, (f) => f(x))
            ).flat()
        );
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {Function} fn - Function that returns a UniqueList.
     * @returns {UniqueList} A new UniqueList instance.
     */
    ["fantasy-land/chain"](fn) {
        return new UniqueList(
            Array.from(this._set, (x) => Array.from(fn(x)._set)).flat()
        );
    }

    /**
     * Fantasy-land compliant concat method.
     * @param {UniqueList} other - Another UniqueList to concatenate.
     * @returns {UniqueList} A new UniqueList with combined elements.
     */
    ["fantasy-land/concat"](other) {
        return new UniqueList([...this._set, ...other._set]);
    }

    /**
     * Fantasy-land compliant reduce method.
     * @param {Function} fn - The reducer function.
     * @param {*} initial - The initial value.
     * @returns {*} The reduced value.
     */
    ["fantasy-land/reduce"](fn, initial) {
        return Array.from(this._set).reduce(fn, initial);
    }

    /**
     * Fantasy-land compliant filter method.
     * @param {Function} pred - The predicate function.
     * @returns {UniqueList} A new filtered UniqueList.
     */
    ["fantasy-land/filter"](pred) {
        return new UniqueList(Array.from(this._set).filter(pred));
    }

    /**
     * Fantasy-land compliant equals method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {boolean} True if equal, false otherwise.
     */
    ["fantasy-land/equals"](other) {
        if (!(other instanceof UniqueList) || this.size !== other.size)
            return false;

        return Array.from(this._set).every((v) => other.has(v));
    }

    /**
     * Fantasy-land compliant alt method.
     * @param {UniqueList} other - Another UniqueList instance.
     * @returns {UniqueList} A new combined UniqueList.
     */
    ["fantasy-land/alt"](other) {
        return this["fantasy-land/concat"](other);
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {UniqueList} A new UniqueList instance.
     */
    static ["fantasy-land/of"](value) {
        return new UniqueList([value]);
    }

    /**
     * Fantasy-land compliant empty method.
     * @static
     * @returns {UniqueList} An empty UniqueList instance.
     */
    static ["fantasy-land/empty"]() {
        return new UniqueList();
    }

    /**
     * Makes UniqueList iterable.
     * @returns {Iterator} An iterator for the set.
     */
    [Symbol.iterator]() {
        return this._set[Symbol.iterator]();
    }

    /**
     * Returns a string representation of the UniqueList.
     * @returns {string} String representation.
     */
    toString() {
        return `UniqueList(${Array.from(this._set)})`;
    }
}
