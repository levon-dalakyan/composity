class Maybe {
    constructor(value) {
        this._value = value;
    }

    getOrElse(defaultValue) {
        return this.isNone() ? defaultValue : this._value;
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    filter(pred) {
        return this.isEmpty() || !pred(this._value) ? Maybe.empty() : this;
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
        return this._value === null || this._value === undefined;
    }

    isSome() {
        return !this.isNone();
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
        return this.isNone() ? Maybe.None() : Maybe.Some(fn(this._value));
    }

    ["fantasy-land/chain"](fn) {
        return this.isNone() ? Maybe.None() : fn(this._value);
    }

    ["fantasy-land/ap"](other) {
        return this.isNone() || other.isNone()
            ? Maybe.None()
            : this["fantasy-land/map"](other._value);
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
            : this._value instanceof Maybe
            ? this._value
            : this;
    }

    ["fantasy-land/equals"](other) {
        if (!(other instanceof Maybe)) return false;
        if (this.isNone() && other.isNone()) return true;
        if (this.isNone() || other.isNone()) return false;

        return this._value === other._value;
    }

    static ["fantasy-land/of"](value) {
        return Maybe.Some(value);
    }

    static ["fantasy-land/zero"]() {
        return Maybe.None();
    }

    toString() {
        return this.isNone() ? "None" : `Some(${this._value})`;
    }
}

Maybe.of = Maybe["fantasy-land/of"];
Maybe.zero = Maybe["fantasy-land/zero"];
