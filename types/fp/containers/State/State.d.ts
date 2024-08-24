/**
 * Represents a State monad for handling computations with mutable state.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 */
export class State implements Functor, Apply, Applicative, Chain, Monad {
    /**
     * Creates a State that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {State} A new State instance.
     */
    static of(value: any): State;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {State} A new State instance.
     */
    static "fantasy-land/of"(value: any): State;
    /**
     * Creates an instance of State.
     * @param {function(*): [*, *]} run - A function that takes a state and returns a tuple of [value, newState].
     */
    constructor(run: (arg0: any) => [any, any]);
    run: (arg0: any) => [any, any];
    /**
     * Creates a State that returns the current state.
     * @returns {State} A new State instance.
     */
    get(): State;
    /**
     * Creates a State that sets a new state.
     * @param {*} newState - The new state to set.
     * @returns {State} A new State instance.
     */
    put(newState: any): State;
    /**
     * Creates a State that modifies the current state.
     * @param {function(*): *} fn - Function to modify the state.
     * @returns {State} A new State instance.
     */
    modify(fn: (arg0: any) => any): State;
    /**
     * Evaluates the State with an initial state and returns the final value.
     * @param {*} initialState - The initial state.
     * @returns {*} The final value.
     */
    evaluate(initialState: any): any;
    /**
     * Executes the State with an initial state and returns the final state.
     * @param {*} initialState - The initial state.
     * @returns {*} The final state.
     */
    execute(initialState: any): any;
    /**
     * Maps a function over this State.
     * @param {function(*): *} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    map(fn: (arg0: any) => any): State;
    /**
     * Applies the function inside another State to the value inside this State.
     * @param {State} other - Another State instance.
     * @returns {State} A new State instance.
     */
    ap(other: State): State;
    /**
     * Chains this State with a function that returns a State.
     * @param {function(*): State} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    chain(fn: (arg0: any) => State): State;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): State;
    /**
     * Fantasy-land compliant ap method.
     * @param {State} other - Another State instance.
     * @returns {State} A new State instance.
     */
    "fantasy-land/ap"(other: State): State;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): State} fn - Function to apply.
     * @returns {State} A new State instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => State): State;
}
