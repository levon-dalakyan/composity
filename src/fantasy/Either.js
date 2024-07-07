class Either {
    #isRight;
    #value;

    constructor(isRight, value) {
        this.#isRight = isRight;
        this.#value = value;
    }

    isRight() {
        return this.#isRight;
    }

    isLeft() {
        return !this.#isRight;
    }

    fold(fnLeft, fnRight) {
        return this.isRight() ? fnRight(this.#value) : fnLeft(this.#value);
    }

    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    static Right(value) {
        return new Either(true, value);
    }

    static Left(value) {
        return new Either(false, value);
    }

    ["fantasy-land/map"](fn) {
        return this.isRight() ? Either.Right(fn(this.#value)) : this;
    }
}
