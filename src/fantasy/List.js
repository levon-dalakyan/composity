class List {
    constructor(values = []) {
        this.values = values;
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    ap(arrayFns) {
        return this["fantasy-land/ap"](arrayFns);
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

    ["fantasy-land/map"](fn) {
        return new List(this.values.map(fn));
    }

    ["fantasy-land/ap"](arrayFns) {
        return new List(
            this.values.flatMap((value) =>
                arrayFns.values.map((fn) => fn(value))
            )
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
        if (!(other instanceof List)) {
            return false;
        }

        if (this.values.length !== other.values.length) {
            return false;
        }

        return this.values.every((value, index) =>
            this.deepEquals(value, other.values[index])
        );
    }

    static ["fantasy-land/of"](value) {
        return new List([value]);
    }

    static ["fantasy-land/empty"]() {
        return new List();
    }

    deepEquals(a, b) {
        if (a === b) {
            return true;
        }

        if (a instanceof List && b instanceof List) {
            return a["fantasy-land/equals"](b);
        }

        if (List.isArray(a) && List.isArray(b)) {
            return (
                a.length === b.length &&
                a.every((val, index) => this.deepEquals(val, b[index]))
            );
        }

        if (
            typeof a === "object" &&
            a !== null &&
            typeof b === "object" &&
            b !== null
        ) {
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);

            return (
                keysA.length === keysB.length &&
                keysA.every(
                    (key) =>
                        keysB.includes(key) && this.deepEquals(a[key], b[key])
                )
            );
        }

        return false;
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
