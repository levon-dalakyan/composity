class Optional {
    #value;

    constructor(value) {
        this.#value = value;
    }

    get() {
        if (this.isNone()) {
            throw new Error("Cannot get value from None");
        }

        return this.#value;
    }

    getOrElse(defaultValue) {
        return this.isNone() ? defaultValue : this.#value;
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    flatMap(fn) {
        return this["fantasy-land/chain"](fn);
    }

    ap(optionalFn) {
        return this["fantasy-land/ap"](optionalFn);
    }

    filter(pred) {
        return this.isEmpty() || !pred(this.#value) ? Optional.empty() : this;
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
        return this.#value === null || this.#value === undefined;
    }

    isSome() {
        return !this.isNone();
    }

    toString() {
        return this.isNone() ? "None" : `Some(${this.#value})`;
    }

    static Some(value) {
        if (value === null || value === undefined) {
            throw new Error("Some cannot contain null or undefined");
        }

        return new Optional(value);
    }

    static None() {
        return new Optional(null);
    }

    ["fantasy-land/map"](fn) {
        return this.isNone() ? Optional.None() : Optional.Some(fn(this.#value));
    }

    ["fantasy-land/chain"](fn) {
        return this.isNone() ? Optional.None() : fn(this.#value);
    }

    ["fantasy-land/ap"](optionalFn) {
        return this.isNone() || optionalFn.isNone()
            ? Optional.None()
            : this["fantasy-land/map"](optionalFn.get());
    }

    ["fantasy-land/alt"](other) {
        return this.isNone() ? other : this;
    }

    ["fantasy-land/extend"](fn) {
        return this.isNone() ? Optional.None() : Optional.Some(fn(this));
    }

    ["fantasy-land/join"]() {
        return this.isNone()
            ? Optional.None()
            : this.#value instanceof Optional
            ? this.#value
            : this;
    }

    ["fantasy-land/equals"](other) {
        if (!(other instanceof Optional)) return false;
        if (this.isNone() && other.isNone()) return true;
        if (this.isNone() || other.isNone()) return false;

        return this.#value === other.get();
    }

    static ["fantasy-land/of"](value) {
        return Optional.Some(value);
    }

    static ["fantasy-land/zero"]() {
        return Optional.None();
    }
}

Optional.of = Optional["fantasy-land/of"];
Optional.zero = Optional["fantasy-land/zero"];
