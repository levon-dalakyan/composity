class Reader {
    constructor(run) {
        this.run = run;
    }

    runWith(env) {
        return this.run(env);
    }

    static ask() {
        return new Reader((env) => env);
    }

    static asks(fn) {
        return new Reader((env) => fn(env));
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

    static of(value) {
        return Reader["fantasy-land/of"](value);
    }

    ["fantasy-land/map"](fn) {
        return new Reader((env) => fn(this.run(env)));
    }

    ["fantasy-land/ap"](other) {
        return new Reader((env) => other.run(env)(this.run(env)));
    }

    ["fantasy-land/chain"](fn) {
        return new Reader((env) => fn(this.run(env)).run(env));
    }

    static ["fantasy-land/of"](value) {
        return new Reader(() => value);
    }
}
