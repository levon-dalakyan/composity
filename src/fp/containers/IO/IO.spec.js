import { jest } from "@jest/globals";
import { IO } from "./IO";

describe("IO", () => {
    describe("Constructor and run method", () => {
        test("IO constructor creates an IO and run executes the effect", () => {
            const effect = jest.fn(() => 5);
            const io = new IO(effect);
            expect(io.run()).toBe(5);
            expect(effect).toHaveBeenCalledTimes(1);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const io = IO.of(5);
            const identity = (x) => x;
            expect(io.map(identity).run()).toBe(io.run());
        });

        test("map preserves composition", () => {
            const io = IO.of(5);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            expect(io.map((x) => f(g(x))).run()).toBe(io.map(g).map(f).run());
        });
    });

    describe("Applicative laws", () => {
        test("ap applies functions in IO", () => {
            const ioFn = IO.of((x) => x * 2);
            const io = IO.of(5);
            expect(io.ap(ioFn).run()).toBe(10);
        });

        test("of and ap satisfy identity", () => {
            const io = IO.of(5);
            expect(io.ap(IO.of((x) => x)).run()).toBe(io.run());
        });

        test("of and ap satisfy homomorphism", () => {
            const f = (x) => x * 2;
            const x = 5;
            expect(IO.of(x).ap(IO.of(f)).run()).toBe(IO.of(f(x)).run());
        });

        test("of and ap satisfy interchange", () => {
            const u = IO.of((x) => x * 2);
            const y = 5;
            expect(IO.of(y).ap(u).run()).toBe(u.ap(IO.of((f) => f(y))).run());
        });
    });

    describe("Monad laws", () => {
        test("of and chain satisfy left identity", () => {
            const f = (x) => IO.of(x * 2);
            const x = 5;
            expect(IO.of(x).chain(f).run()).toBe(f(x).run());
        });

        test("of and chain satisfy right identity", () => {
            const io = IO.of(5);
            expect(io.chain(IO.of).run()).toBe(io.run());
        });

        test("chain satisfies associativity", () => {
            const io = IO.of(5);
            const f = (x) => IO.of(x * 2);
            const g = (x) => IO.of(x + 1);
            expect(io.chain(f).chain(g).run()).toBe(
                io.chain((x) => f(x).chain(g)).run()
            );
        });
    });
});
