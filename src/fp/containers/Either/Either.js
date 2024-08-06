export class Either {
    constructor(isRight, value) {
        this._isRight = isRight;
        this._value = value;
    }

    fold(fnLeft, fnRight) {
        return this.isRight() ? fnRight(this._value) : fnLeft(this._value);
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
        return this._isRight;
    }

    isLeft() {
        return !this._isRight;
    }

    static Right(value) {
        return new Either(true, value);
    }

    static Left(value) {
        return new Either(false, value);
    }

    ["fantasy-land/map"](fn) {
        return this.isRight() ? Either.Right(fn(this._value)) : this;
    }

    ["fantasy-land/chain"](fn) {
        return this.isRight() ? fn(this._value) : this;
    }

    ["fantasy-land/ap"](other) {
        return this.isRight() ? this["fantasy-land/map"](other._value) : this;
    }

    ["fantasy-land/bimap"](fnLeft, fnRight) {
        return this.isRight()
            ? Either.Right(fnRight(this._value))
            : Either.Left(fnLeft(this._value));
    }

    ["fantasy-land/extend"](fn) {
        return this.isRight() ? Either.Right(fn(this)) : this;
    }

    ["fantasy-land/equals"](other) {
        return (
            other instanceof Either &&
            this.isRight() === other.isRight() &&
            this._value === other._value
        );
    }

    static ["fantasy-land/of"](value) {
        return Either.Right(value);
    }

    toString() {
        return this.isRight()
            ? `Right(${this._value})`
            : `Left(${this._value})`;
    }
}

Either.of = Either["fantasy-land/of"];
