import { Maybe } from "./Maybe";

describe("Maybe", () => {
    describe("Constructor and basic methods", () => {
        test("Some creates a Some value", () => {
            const some = Maybe.Some(5);
            expect(some.isSome()).toBe(true);
            expect(some.isNone()).toBe(false);
        });

        test("None creates a None value", () => {
            const none = Maybe.None();
            expect(none.isNone()).toBe(true);
            expect(none.isSome()).toBe(false);
        });

        test("Some throws error for null or undefined", () => {
            expect(() => Maybe.Some(null)).toThrow();
            expect(() => Maybe.Some(undefined)).toThrow();
        });

        test("getOrElse returns value for Some and default for None", () => {
            expect(Maybe.Some(5).getOrElse(10)).toBe(5);
            expect(Maybe.None().getOrElse(10)).toBe(10);
        });

        test("toString returns correct string representation", () => {
            expect(Maybe.Some(5).toString()).toBe("Some(5)");
            expect(Maybe.None().toString()).toBe("None");
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const some = Maybe.Some(5);
            const none = Maybe.None();
            const identity = (x) => x;

            expect(some.map(identity).equals(some)).toBe(true);
            expect(none.map(identity).equals(none)).toBe(true);
        });

        test("map preserves composition", () => {
            const some = Maybe.Some(5);
            const f = (x) => x * 2;
            const g = (x) => x + 1;

            expect(some.map((x) => f(g(x))).equals(some.map(g).map(f))).toBe(
                true
            );
        });
    });

    describe("Applicative laws", () => {
        test("ap applies functions in Maybe", () => {
            const someFn = Maybe.Some((x) => x * 2);
            const some = Maybe.Some(5);
            const none = Maybe.None();

            expect(some.ap(someFn).equals(Maybe.Some(10))).toBe(true);
            expect(none.ap(someFn).equals(Maybe.None())).toBe(true);
        });

        test("of and ap satisfy identity", () => {
            const some = Maybe.Some(5);
            expect(some.ap(Maybe.of((x) => x)).equals(some)).toBe(true);
        });

        test("of and ap satisfy homomorphism", () => {
            const f = (x) => x * 2;
            const x = 5;
            expect(
                Maybe.of(x)
                    .ap(Maybe.of(f))
                    .equals(Maybe.of(f(x)))
            ).toBe(true);
        });

        test("of and ap satisfy interchange", () => {
            const u = Maybe.of((x) => x * 2);
            const y = 5;
            expect(
                Maybe.of(y)
                    .ap(u)
                    .equals(u.ap(Maybe.of((f) => f(y))))
            ).toBe(true);
        });
    });

    describe("Monad laws", () => {
        test("chain behaves correctly", () => {
            const some = Maybe.Some(5);
            const none = Maybe.None();
            const f = (x) => Maybe.Some(x * 2);

            expect(some.chain(f).equals(Maybe.Some(10))).toBe(true);
            expect(none.chain(f).equals(Maybe.None())).toBe(true);
        });

        test("of and chain satisfy left identity", () => {
            const f = (x) => Maybe.Some(x * 2);
            const x = 5;
            expect(Maybe.of(x).chain(f).equals(f(x))).toBe(true);
        });

        test("of and chain satisfy right identity", () => {
            const some = Maybe.Some(5);
            expect(some.chain(Maybe.of).equals(some)).toBe(true);
        });

        test("chain satisfies associativity", () => {
            const some = Maybe.Some(5);
            const f = (x) => Maybe.Some(x * 2);
            const g = (x) => Maybe.Some(x + 1);
            expect(
                some
                    .chain(f)
                    .chain(g)
                    .equals(some.chain((x) => f(x).chain(g)))
            ).toBe(true);
        });
    });

    describe("Alt and Plus laws", () => {
        test("alt combines two Maybes", () => {
            const some1 = Maybe.Some(1);
            const some2 = Maybe.Some(2);
            const none = Maybe.None();

            expect(some1.alt(some2).equals(some1)).toBe(true);
            expect(none.alt(some2).equals(some2)).toBe(true);
        });

        test("empty and alt satisfy identity", () => {
            const some = Maybe.Some(5);
            const empty = Maybe.empty();
            expect(some.alt(empty).equals(some)).toBe(true);
            expect(empty.alt(some).equals(some)).toBe(true);
        });
    });

    describe("Alternative laws", () => {
        test("empty and ap satisfy annihilation", () => {
            const some = Maybe.Some(5);
            expect(some.ap(Maybe.empty()).equals(Maybe.empty())).toBe(true);
        });

        test("ap and alt satisfy distributivity", () => {
            const some = Maybe.Some(5);
            const f = Maybe.Some((x) => x * 2);
            const g = Maybe.Some((x) => x + 1);
            expect(some.ap(f.alt(g)).equals(some.ap(f).alt(some.ap(g)))).toBe(
                true
            );
        });
    });

    describe("Extend laws", () => {
        test("extend behaves correctly", () => {
            const some = Maybe.Some(5);
            const none = Maybe.None();
            const f = (m) => m.getOrElse(0) * 2;

            expect(some.extend(f).equals(Maybe.Some(10))).toBe(true);
            expect(none.extend(f).equals(Maybe.None())).toBe(true);
        });
    });

    describe("Setoid laws", () => {
        test("equals compares Maybes correctly", () => {
            const some1 = Maybe.Some(5);
            const some2 = Maybe.Some(5);
            const some3 = Maybe.Some(10);
            const none1 = Maybe.None();
            const none2 = Maybe.None();

            expect(some1.equals(some2)).toBe(true);
            expect(some1.equals(some3)).toBe(false);
            expect(none1.equals(none2)).toBe(true);
            expect(some1.equals(none1)).toBe(false);
        });
    });

    describe("Other methods", () => {
        test("filter behaves correctly", () => {
            const some = Maybe.Some(5);
            const none = Maybe.None();
            const pred = (x) => x > 3;

            expect(some.filter(pred).equals(some)).toBe(true);
            expect(some.filter((x) => x > 10).equals(Maybe.None())).toBe(true);
            expect(none.filter(pred).equals(Maybe.None())).toBe(true);
        });

        test("join flattens nested Maybes", () => {
            const nestedSome = Maybe.Some(Maybe.Some(5));
            const flatSome = Maybe.Some(5);
            const none = Maybe.None();

            expect(nestedSome.join().equals(flatSome)).toBe(true);
            expect(flatSome.join().equals(flatSome)).toBe(true);
            expect(none.join().equals(Maybe.None())).toBe(true);
        });
    });
});
