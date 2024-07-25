class Lazy {
  constructor(computation) {
    this.computation = computation;
  }

  evaluate() {
    return this.computation();
  }

  extract() {
    return this["fantasy-land/extract"]();
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

  extend(fn) {
    return this["fantasy-land/extend"](fn);
  }

  static of(value) {
    return Lazy["fantasy-land/of"](value);
  }

  ["fantasy-land/extract"]() {
    return this.computation();
  }

  ["fantasy-land/map"](fn) {
    return new Lazy(() => fn(this.computation()));
  }

  ["fantasy-land/ap"](other) {
    return new Lazy(() => other.evaluate()(this.computation()));
  }

  ["fantasy-land/chain"](fn) {
    return new Lazy(() => fn(this.computation()).evaluate());
  }

  ["fantasy-land/extend"](fn) {
    return new Lazy(() => fn(this));
  }

  static ["fantasy-land/of"](value) {
    return new Lazy(() => value);
  }
}
