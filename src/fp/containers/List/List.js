export class List {
    constructor(values = []) {
        this._list = values;
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
        return new List(this._list.map(fn));
    }

    ["fantasy-land/ap"](other) {
        return new List(
            this._list.flatMap((value) => other._list.map((fn) => fn(value)))
        );
    }

    ["fantasy-land/chain"](fn) {
        return new List(this._list.flatMap((value) => fn(value).values));
    }

    ["fantasy-land/concat"](other) {
        return new List(this._list.concat(other._list));
    }

    ["fantasy-land/reduce"](fn, initial) {
        return this._list.reduce(fn, initial);
    }

    ["fantasy-land/filter"](pred) {
        return new List(this._list.filter(pred));
    }

    ["fantasy-land/equals"](other) {
        return (
            this._list.length === other._list.length &&
            this._list.every((v, i) => v === other._list[i])
        );
    }

    ["fantasy-land/alt"](other) {
        return this["fantasy-land/concat"](other);
    }

    static ["fantasy-land/of"](value) {
        return new List([value]);
    }

    static ["fantasy-land/empty"]() {
        return new List();
    }

    static ["fantasy-land/zero"]() {
        return List["fantasy-land/empty"]();
    }

    [Symbol.iterator]() {
        return this._list[Symbol.iterator]();
    }

    toString() {
        return `List(${this._list})`;
    }
}

List.of = List["fantasy-land/of"];
List.empty = List["fantasy-land/empty"];
List.zero = List["fantasy-land/zero"];
