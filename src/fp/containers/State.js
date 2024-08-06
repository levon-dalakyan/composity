class State {
    constructor(run) {
        this.run = run;
    }

    get() {
        return new State((state) => [state, state]);
    }

    put(newState) {
        return new State(() => [null, newState]);
    }

    modify(fn) {
        return new State((state) => [null, fn(state)]);
    }

    evaluate(initialState) {
        return this.run(initialState)[0];
    }

    execute(initialState) {
        return this.run(initialState)[1];
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
        return State["fantasy-land/of"](value);
    }

    ["fantasy-land/map"](fn) {
        return new State((state) => {
            const [a, newState] = this.run(state);
            return [fn(a), newState];
        });
    }

    ["fantasy-land/ap"](other) {
        return new State((state) => {
            const [fn, intermediateState] = other.run(state);
            const [a, finalState] = this.run(intermediateState);
            return [fn(a), finalState];
        });
    }

    ["fantasy-land/chain"](fn) {
        return new State((state) => {
            const [a, newState] = this.run(state);
            return fn(a).run(newState);
        });
    }

    static ["fantasy-land/of"](value) {
        return new State(() => [value, value]);
    }
}
