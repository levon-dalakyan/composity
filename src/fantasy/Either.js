class Either {
    constructor(isRight, value) {
        this.isRight = isRight;
        this.value = value;
    }

    fold(fnLeft, fnRight) {
        return this.isRight() ? fnRight(this.value) : fnLeft(this.value);
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

    bimap(fnLeft, fnRight) {
        return this["fantasy-land/bimap"](fnLeft, fnRight);
    }

    extend(fn) {
        return this["fantasy-land/extend"](fn);
    }

    equals(other) {
        return this["fantasy-land/equals"](other);
    }

    isRight() {
        return this.isRight;
    }

    isLeft() {
        return !this.isRight;
    }

    toString() {
        return this.isRight() ? `Right(${this.value})` : `Left(${this.value})`;
    }

    static Right(value) {
        return new Either(true, value);
    }

    static Left(value) {
        return new Either(false, value);
    }

    ["fantasy-land/map"](fn) {
        return this.isRight() ? Either.Right(fn(this.value)) : this;
    }

    ["fantasy-land/chain"](fn) {
        return this.isRight() ? fn(this.value) : this;
    }

    ["fantasy-land/ap"](other) {
        return this.isRight() ? this["fantasy-land/map"](other.value) : this;
    }

    ["fantasy-land/bimap"](fnLeft, fnRight) {
        return this.isRight()
            ? Either.Right(fnRight(this.value))
            : Either.Left(fnLeft(this.value));
    }

    ["fantasy-land/extend"](fn) {
        return this.isRight() ? Either.Right(fn(this)) : this;
    }

    ["fantasy-land/equals"](other) {
        return (
            other instanceof Either &&
            this.isRight() === other.isRight() &&
            this.value === other.value
        );
    }

    static ["fantasy-land/of"](value) {
        return Either.Right(value);
    }
}

Either.of = Either["fantasy-land/of"];
