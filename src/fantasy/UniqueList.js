class UniqueList {
    constructor(values = []) {
        this._set = new Set(values);
    }

    has(value) {
        return this._set.has(value);
    }

    add(value) {
        return new UniqueList([...this._set, value]);
    }

    delete(value) {
        const newSet = new Set(this._set);
        newSet.delete(value);
        return new UniqueList(newSet);
    }

    get size() {
        return this._set.size;
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    concat(other) {
        return this["fantasy-land/concat"](other);
    }

    reduce(fn, initial) {
        return this["fantasy-land/reduce"](fn, initial);
    }

    filter(pred) {
        return this["fantasy-land/filter"](pred);
    }

    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    alt(other) {
        return this["fantasy-land/alt"](other);
    }

    ["fantasy-land/map"](fn) {
        return new UniqueList(Array.from(this._set, fn));
    }

    ["fantasy-land/ap"](other) {
        return new UniqueList(
            Array.from(this._set, (x) =>
                Array.from(other._set, (f) => f(x))
            ).flat()
        );
    }

    ["fantasy-land/chain"](fn) {
        return new UniqueList(
            Array.from(this._set, (x) => Array.from(fn(x).set)).flat()
        );
    }

    ["fantasy-land/concat"](other) {
        return new UniqueList([...this._set, ...other._set]);
    }

    ["fantasy-land/reduce"](fn, initial) {
        return Array.from(this._set).reduce(fn, initial);
    }

    ["fantasy-land/filter"](pred) {
        return new UniqueList(Array.from(this._set).filter(pred));
    }

    ["fantasy-land/equals"](other) {
        if (!(other instanceof UniqueList) || this.size !== other.size)
            return false;

        return Array.from(this._set).every((v) => other.has(v));
    }

    ["fantasy-land/alt"](other) {
        return this["fantasy-land/concat"](other);
    }

    static ["fantasy-land/of"](value) {
        return new UniqueList([value]);
    }

    static ["fantasy-land/empty"]() {
        return new UniqueList();
    }

    static ["fantasy-land/zero"]() {
        return this["fantasy-land/empty"]();
    }

    [Symbol.iterator]() {
        return this._set[Symbol.iterator]();
    }

    toString() {
        return `UniqueList(${Array.from(this._set)})`;
    }
}

UniqueList.of = UniqueList["fantasy-land/of"];
UniqueList.empty = UniqueList["fantasy-land/empty"];
UniqueList.zero = UniqueList["fantasy-land/zero"];
