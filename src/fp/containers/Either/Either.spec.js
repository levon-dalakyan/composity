import { Either } from "./Either";

describe("Either", () => {
    describe("Constructor and static methods", () => {
        test("Right constructor creates a Right value", () => {
            const right = Either.Right(5);
            expect(right.isRight()).toBe(true);
            expect(right.isLeft()).toBe(false);
        });

        test("Left constructor creates a Left value", () => {
            const left = Either.Left("error");
            expect(left.isLeft()).toBe(true);
            expect(left.isRight()).toBe(false);
        });

        test("of method creates a Right value", () => {
            const right = Either.of(5);
            expect(right.isRight()).toBe(true);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");

            expect(right.map((x) => x)).toEqual(right);
            expect(left.map((x) => x)).toEqual(left);
        });

        test("map preserves composition", () => {
            const right = Either.Right(5);
            const f = (x) => x * 2;
            const g = (x) => x + 1;

            expect(right.map((x) => f(g(x)))).toEqual(right.map(g).map(f));
        });
    });

    describe("Applicative laws", () => {
        test("ap applies functions in Right values", () => {
            const rightFn = Either.Right((x) => x * 2);
            const right = Either.Right(5);

            expect(right.ap(rightFn)).toEqual(Either.Right(10));
        });

        test("ap does not apply functions to Left values", () => {
            const rightFn = Either.Right((x) => x * 2);
            const left = Either.Left("error");

            expect(left.ap(rightFn)).toEqual(left);
        });
    });

    describe("Monad laws", () => {
        test("chain behaves correctly", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");
            const f = (x) => Either.Right(x * 2);

            expect(right.chain(f)).toEqual(Either.Right(10));
            expect(left.chain(f)).toEqual(left);
        });
    });

    describe("Bifunctor laws", () => {
        test("bimap applies the correct function", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");

            expect(
                right.bimap(
                    (x) => x,
                    (x) => x * 2
                )
            ).toEqual(Either.Right(10));
            expect(
                left.bimap(
                    (x) => x + "!",
                    (x) => x
                )
            ).toEqual(Either.Left("error!"));
        });
    });

    describe("Extend laws", () => {
        test("extend behaves correctly", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");
            const f = (e) =>
                e.fold(
                    () => 0,
                    (x) => x * 2
                );

            expect(right.extend(f)).toEqual(Either.Right(10));
            expect(left.extend(f)).toEqual(left);
        });
    });

    describe("Setoid laws", () => {
        test("equals compares Either values correctly", () => {
            const right1 = Either.Right(5);
            const right2 = Either.Right(5);
            const right3 = Either.Right(10);
            const left1 = Either.Left("error");
            const left2 = Either.Left("error");
            const left3 = Either.Left("different error");

            expect(right1.equals(right2)).toBe(true);
            expect(right1.equals(right3)).toBe(false);
            expect(left1.equals(left2)).toBe(true);
            expect(left1.equals(left3)).toBe(false);
            expect(right1.equals(left1)).toBe(false);
        });
    });

    describe("Other methods", () => {
        test("fold applies the correct function", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");

            expect(
                right.fold(
                    (x) => x,
                    (x) => x * 2
                )
            ).toBe(10);
            expect(
                left.fold(
                    (x) => x + "!",
                    (x) => x
                )
            ).toBe("error!");
        });

        test("toString returns the correct string representation", () => {
            const right = Either.Right(5);
            const left = Either.Left("error");

            expect(right.toString()).toBe("Right(5)");
            expect(left.toString()).toBe("Left(error)");
        });
    });
});
