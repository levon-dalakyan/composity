class Task {
    constructor(computation) {
        this.computation = computation;
    }

    fork(resolve, reject) {
        this.computation(resolve, reject);
    }

    toPromise() {
        return new Promise((resolve, reject) => {
            this.fork(resolve, reject);
        });
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

    bimap(f, g) {
        return this["fantasy-land/bimap"](f, g);
    }

    static of(value) {
        return Task["fantasy-land/of"](value);
    }

    ["fantasy-land/map"](fn) {
        return new Task((resolve, reject) =>
            this.computation((x) => resolve(fn(x)), reject)
        );
    }

    ["fantasy-land/ap"](other) {
        return this.chain((x) => other.map((f) => f(x)));
    }

    ["fantasy-land/chain"](fn) {
        return new Task((resolve, reject) =>
            this.computation((x) => fn(x).fork(resolve, reject), reject)
        );
    }

    ["fantasy-land/bimap"](f, g) {
        return new Task((resolve, reject) => {
            this.computation(
                (x) => resolve(f(x)),
                (x) => reject(g(x))
            );
        });
    }

    static ["fantasy-land/of"](value) {
        return new Task((resolve) => resolve(value));
    }
}
