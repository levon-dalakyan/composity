import { jest } from "@jest/globals";
import { Lazy } from "./Lazy";

describe("Lazy", () => {
    describe("Constructor and basic methods", () => {
        test("constructor creates a Lazy computation", () => {
            const computation = jest.fn(() => 5);
            const lazy = new Lazy(computation);
            expect(computation).not.toHaveBeenCalled();
            expect(lazy.evaluate()).toBe(5);
            expect(computation).toHaveBeenCalledTimes(1);
        });

        test("evaluate executes the computation", () => {
            const lazy = new Lazy(() => 5);
            expect(lazy.evaluate()).toBe(5);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const lazy = new Lazy(() => 5);
            const identity = (x) => x;
            expect(lazy.map(identity).evaluate()).toBe(lazy.evaluate());
        });

        test("map preserves composition", () => {
            const lazy = new Lazy(() => 5);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            expect(lazy.map((x) => f(g(x))).evaluate()).toBe(
                lazy.map(g).map(f).evaluate()
            );
        });
    });

    describe("Apply and Applicative laws", () => {
        test("ap applies functions in Lazy", () => {
            const lazyFn = new Lazy(() => (x) => x * 2);
            const lazy = new Lazy(() => 5);
            expect(lazy.ap(lazyFn).evaluate()).toBe(10);
        });

        test("of and ap satisfy identity", () => {
            const lazy = new Lazy(() => 5);
            expect(lazy.ap(Lazy.of((x) => x)).evaluate()).toBe(lazy.evaluate());
        });

        test("of and ap satisfy homomorphism", () => {
            const f = (x) => x * 2;
            const x = 5;
            expect(Lazy.of(x).ap(Lazy.of(f)).evaluate()).toBe(
                Lazy.of(f(x)).evaluate()
            );
        });

        test("of and ap satisfy interchange", () => {
            const u = Lazy.of((x) => x * 2);
            const y = 5;
            expect(Lazy.of(y).ap(u).evaluate()).toBe(
                u.ap(Lazy.of((f) => f(y))).evaluate()
            );
        });
    });

    describe("Chain and Monad laws", () => {
        test("chain behaves correctly", () => {
            const lazy = new Lazy(() => 5);
            const f = (x) => new Lazy(() => x * 2);
            expect(lazy.chain(f).evaluate()).toBe(10);
        });

        test("of and chain satisfy left identity", () => {
            const f = (x) => new Lazy(() => x * 2);
            const x = 5;
            expect(Lazy.of(x).chain(f).evaluate()).toBe(f(x).evaluate());
        });

        test("of and chain satisfy right identity", () => {
            const lazy = new Lazy(() => 5);
            expect(lazy.chain(Lazy.of).evaluate()).toBe(lazy.evaluate());
        });

        test("chain satisfies associativity", () => {
            const lazy = new Lazy(() => 5);
            const f = (x) => new Lazy(() => x * 2);
            const g = (x) => new Lazy(() => x + 1);
            expect(lazy.chain(f).chain(g).evaluate()).toBe(
                lazy.chain((x) => f(x).chain(g)).evaluate()
            );
        });
    });

    describe("Comonad laws", () => {
        test("extend behaves correctly", () => {
            const lazy = new Lazy(() => 5);
            const f = (w) => w.evaluate() * 2;
            expect(lazy.extend(f).evaluate()).toBe(10);
        });

        test("extend satisfies composition", () => {
            const lazy = new Lazy(() => 5);
            const f = (w) => w.evaluate() * 2;
            const g = (w) => w.evaluate() + 1;
            expect(lazy.extend(f).extend(g).evaluate()).toBe(
                lazy.extend((w) => g(w.extend(f))).evaluate()
            );
        });
    });
});
