export class KeyValueList {
    constructor(entries = []) {
        this._map = new Map(entries);
    }

    get(key) {
        return this._map.get(key);
    }

    has(key) {
        return this._map.has(key);
    }

    set(key, value) {
        const newMap = new Map(this._map);
        newMap.set(key, value);
        return new KeyValueList(newMap);
    }

    delete(key) {
        const newMap = new Map(this._map);
        newMap.delete(key);
        return new KeyValueList(newMap);
    }

    get size() {
        return this._map.size;
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

    bimap(fnK, fnV) {
        return this["fantasy-land/bimap"](fnK, fnV);
    }

    concat(other) {
        return this["fantasy-land/concat"](other);
    }

    reduce(fn, initial) {
        return this["fantasy-land/reduce"](fn, initial);
    }

    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    static of(value) {
        return KeyValueList["fantasy-land/of"](value);
    }

    static empty() {
        return KeyValueList["fantasy-land/empty"]();
    }

    static zero() {
        return KeyValueList["fantasy-land/zero"]();
    }

    ["fantasy-land/map"](fn) {
        return new KeyValueList(
            Array.from(this._map, ([k, v]) => [k, fn(v, k)])
        );
    }

    ["fantasy-land/ap"](other) {
        const resMap = new Map();

        for (const [k, v] of this._map) {
            if (other.has(k)) {
                resMap.set(k, other._map.get(k)(v));
            }
        }

        return new KeyValueList(resMap);
    }

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

    ["fantasy-land/bimap"](fnK, fnV) {
        return new KeyValueList(
            Array.from(this._map, ([k, v]) => [fnK(k), fnV(v)])
        );
    }

    ["fantasy-land/concat"](other) {
        return new KeyValueList([...this._map, ...other._map]);
    }

    ["fantasy-land/reduce"](fn, initial) {
        let result = initial;

        for (const [k, v] of this._map) {
            result = fn(result, v, k);
        }

        return result;
    }

    ["fantasy-land/equals"](other) {
        if (!(other instanceof KeyValueList) || this.size !== other.size)
            return false;

        for (const [k, v] of this._map) {
            if (!other.has(k) || other.get(k) !== v) return false;
        }

        return true;
    }

    static ["fantasy-land/of"](value) {
        return new KeyValueList([["_", value]]);
    }

    static ["fantasy-land/empty"]() {
        return new KeyValueList();
    }

    static ["fantasy-land/zero"]() {
        return KeyValueList["fantasy-land/empty"]();
    }

    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }

    toString() {
        return `KeyValueList(${JSON.stringify(Object.fromEntries(this._map))})`;
    }
}
