import { State } from "./State";

describe("State", () => {
    describe("Constructor and basic methods", () => {
        test("run executes the State with given state", () => {
            const state = new State((s) => [s * 2, s + 1]);
            expect(state.run(5)).toEqual([10, 6]);
        });

        test("get returns the current state", () => {
            const state = State.prototype.get();
            expect(state.run(5)).toEqual([5, 5]);
        });

        test("put sets a new state", () => {
            const state = State.prototype.put(10);
            expect(state.run(5)).toEqual([null, 10]);
        });

        test("modify applies a function to the state", () => {
            const state = State.prototype.modify((s) => s * 2);
            expect(state.run(5)).toEqual([null, 10]);
        });

        test("evaluate returns the final value", () => {
            const state = new State((s) => [s * 2, s + 1]);
            expect(state.evaluate(5)).toBe(10);
        });

        test("execute returns the final state", () => {
            const state = new State((s) => [s * 2, s + 1]);
            expect(state.execute(5)).toBe(6);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const state = new State((s) => [s, s]);
            const mapped = state.map((x) => x);
            expect(state.run(5)).toEqual(mapped.run(5));
        });

        test("map preserves composition", () => {
            const state = new State((s) => [s, s]);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            const mapped1 = state.map((x) => f(g(x)));
            const mapped2 = state.map(g).map(f);
            expect(mapped1.run(5)).toEqual(mapped2.run(5));
        });
    });

    describe("Applicative laws", () => {
        test("of method creates a State that returns the given value", () => {
            const state = State.of(5);
            expect(state.run({})).toEqual([5, 5]);
        });

        test("ap applies functions in State values", () => {
            const stateFn = State.of((x) => x * 2);
            const state = State.of(5);
            expect(state.ap(stateFn).run({})).toEqual([10, 5]);
        });
    });

    describe("Monad laws", () => {
        test("chain behaves correctly", () => {
            const state = new State((s) => [s, s + 1]);
            const f = (x) => State.of(x * 2);
            const chained = state.chain(f);
            expect(chained.run(5)).toEqual([10, 10]);
        });
    });
});
