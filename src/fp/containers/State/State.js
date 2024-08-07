/**
 * Represents a State monad for handling computations with mutable state.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class State {
    /**
     * Creates an instance of State.
     * @param {function(*): [*, *]} run - A function that takes a state and returns a tuple of [value, newState].
     */
    constructor(run) {
        this.run = run;
    }

    /**
     * Creates a State that returns the current state.
     * @returns {State} A new State instance.
     */
    get() {
        return new State((state) => [state, state]);
    }

    /**
     * Creates a State that sets a new state.
     * @param {*} newState - The new state to set.
     * @returns {State} A new State instance.
     */
    put(newState) {
        return new State(() => [null, newState]);
    }

    /**
     * Creates a State that modifies the current state.
     * @param {function(*): *} fn - Function to modify the state.
     * @returns {State} A new State instance.
     */
    modify(fn) {
        return new State((state) => [null, fn(state)]);
    }

    /**
     * Evaluates the State with an initial state and returns the final value.
     * @param {*} initialState - The initial state.
     * @returns {*} The final value.
     */
    evaluate(initialState) {
        return this.run(initialState)[0];
    }

    /**
     * Executes the State with an initial state and returns the final state.
     * @param {*} initialState - The initial state.
     * @returns {*} The final state.
     */
    execute(initialState) {
        return this.run(initialState)[1];
    }

    /**
     * Maps a function over this State.
     * @param {function(*): *} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the function inside another State to the value inside this State.
     * @param {State} other - Another State instance.
     * @returns {State} A new State instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this State with a function that returns a State.
     * @param {function(*): State} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Creates a State that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {State} A new State instance.
     */
    static of(value) {
        return State["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    ["fantasy-land/map"](fn) {
        return new State((state) => {
            const [a, newState] = this.run(state);
            return [fn(a), newState];
        });
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {State} other - Another State instance.
     * @returns {State} A new State instance.
     */
    ["fantasy-land/ap"](other) {
        return new State((state) => {
            const [fn, intermediateState] = other.run(state);
            const [a, finalState] = this.run(intermediateState);
            return [fn(a), finalState];
        });
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): State} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    ["fantasy-land/chain"](fn) {
        return new State((state) => {
            const [a, newState] = this.run(state);
            return fn(a).run(newState);
        });
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {State} A new State instance.
     */
    static ["fantasy-land/of"](value) {
        return new State(() => [value, value]);
    }
}
