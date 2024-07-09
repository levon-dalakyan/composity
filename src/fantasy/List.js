class List {
    constructor(values = []) {
        this.values = values;
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
        return new List(this.values.map(fn));
    }

    ["fantasy-land/ap"](other) {
        return new List(
            this.values.flatMap((value) => other.values.map((fn) => fn(value)))
        );
    }

    ["fantasy-land/chain"](fn) {
        return new List(this.values.flatMap((value) => fn(value).values));
    }

    ["fantasy-land/concat"](other) {
        return new List(this.values.concat(other.values));
    }

    ["fantasy-land/reduce"](fn, initial) {
        return this.values.reduce(fn, initial);
    }

    ["fantasy-land/filter"](pred) {
        return new List(this.values.filter(pred));
    }

    ["fantasy-land/equals"](other) {
        return (
            this.values.length === other.values.length &&
            this.values.every((v, i) => v === other.values[i])
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
        return this["fantasy-land/empty"]();
    }

    [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    toString() {
        return `List(${this.values})`;
    }
}

List.of = List["fantasy-land/of"];
List.empty = List["fantasy-land/empty"];
List.zero = List["fantasy-land/zero"];
