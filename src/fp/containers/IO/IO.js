export class IO {
    constructor(effect) {
        this._effect = effect;
    }

    run() {
        return this._effect();
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
        return IO["fantasy-land/of"](value);
    }

    ["fantasy-land/map"](fn) {
        return new IO(() => fn(this._effect()));
    }

    ["fantasy-land/ap"](other) {
        return new IO(() => other._effect()(this._effect()));
    }

    ["fantasy-land/chain"](fn) {
        return new IO(() => fn(this._effect())._effect());
    }

    static ["fantasy-land/of"](value) {
        return new IO(() => value);
    }
}
