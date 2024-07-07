class Maybe {
    constructor(value) {
        this.value = value;
    }

    getOrElse(defaultValue) {
        return this.isNone() ? defaultValue : this.value;
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    ap(optionalFn) {
        return this["fantasy-land/ap"](optionalFn);
    }

    filter(pred) {
        return this.isEmpty() || !pred(this.value) ? Maybe.empty() : this;
    }

    alt(other) {
        return this["fantasy-land/alt"](other);
    }

    extend(fn) {
        return this["fantasy-land/extend"](fn);
    }

    join() {
        return this["fantasy-land/join"]();
    }

    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    isNone() {
        return this.value === null || this.value === undefined;
    }

    isSome() {
        return !this.isNone();
    }

    toString() {
        return this.isNone() ? "None" : `Some(${this.value})`;
    }

    static Some(value) {
        if (value === null || value === undefined) {
            throw new Error("Some cannot contain null or undefined");
        }

        return new Maybe(value);
    }

    static None() {
        return new Maybe(null);
    }

    ["fantasy-land/map"](fn) {
        return this.isNone() ? Maybe.None() : Maybe.Some(fn(this.value));
    }

    ["fantasy-land/chain"](fn) {
        return this.isNone() ? Maybe.None() : fn(this.value);
    }

    ["fantasy-land/ap"](optionalFn) {
        return this.isNone() || optionalFn.isNone()
            ? Maybe.None()
            : this["fantasy-land/map"](optionalFn.value);
    }

    ["fantasy-land/alt"](other) {
        return this.isNone() ? other : this;
    }

    ["fantasy-land/extend"](fn) {
        return this.isNone() ? Maybe.None() : Maybe.Some(fn(this));
    }

    ["fantasy-land/join"]() {
        return this.isNone()
            ? Maybe.None()
            : this.value instanceof Maybe
            ? this.value
            : this;
    }

    ["fantasy-land/equals"](other) {
        if (!(other instanceof Maybe)) return false;
        if (this.isNone() && other.isNone()) return true;
        if (this.isNone() || other.isNone()) return false;

        return this.value === other.value;
    }

    static ["fantasy-land/of"](value) {
        return Maybe.Some(value);
    }

    static ["fantasy-land/zero"]() {
        return Maybe.None();
    }
}

Maybe.of = Maybe["fantasy-land/of"];
Maybe.zero = Maybe["fantasy-land/zero"];
