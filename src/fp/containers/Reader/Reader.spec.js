import { Reader } from "./Reader";

describe("Reader", () => {
    describe("Constructor and basic methods", () => {
        test("runWith executes the Reader with given environment", () => {
            const reader = new Reader((env) => env.value * 2);
            expect(reader.runWith({ value: 5 })).toBe(10);
        });

        test("ask returns the environment itself", () => {
            const reader = Reader.ask();
            const env = { key: "value" };
            expect(reader.runWith(env)).toEqual(env);
        });

        test("asks applies a function to the environment", () => {
            const reader = Reader.asks((env) => env.value + 1);
            expect(reader.runWith({ value: 5 })).toBe(6);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const reader = new Reader((env) => env.value);
            const mapped = reader.map((x) => x);
            const env = { value: 5 };
            expect(reader.runWith(env)).toBe(mapped.runWith(env));
        });

        test("map preserves composition", () => {
            const reader = new Reader((env) => env.value);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            const mapped1 = reader.map((x) => f(g(x)));
            const mapped2 = reader.map(g).map(f);
            const env = { value: 5 };
            expect(mapped1.runWith(env)).toBe(mapped2.runWith(env));
        });
    });

    describe("Applicative laws", () => {
        test("of method creates a Reader that returns the given value", () => {
            const reader = Reader.of(5);
            expect(reader.runWith({})).toBe(5);
        });

        test("ap applies functions in Reader values", () => {
            const readerFn = Reader.of((x) => x * 2);
            const reader = Reader.of(5);
            expect(reader.ap(readerFn).runWith({})).toBe(10);
        });
    });

    describe("Monad laws", () => {
        test("chain behaves correctly", () => {
            const reader = new Reader((env) => env.value);
            const f = (x) => Reader.of(x * 2);
            const chained = reader.chain(f);
            const env = { value: 5 };
            expect(chained.runWith(env)).toBe(10);
        });

        test("left identity", () => {
            const f = (x) => Reader.of(x * 2);
            const value = 5;
            const reader1 = Reader.of(value).chain(f);
            const reader2 = f(value);
            expect(reader1.runWith({})).toBe(reader2.runWith({}));
        });

        test("right identity", () => {
            const reader = Reader.of(5);
            const chained = reader.chain(Reader.of);
            expect(reader.runWith({})).toBe(chained.runWith({}));
        });
    });
});
