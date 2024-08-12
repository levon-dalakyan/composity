import { pipe } from "./pipe";

describe("pipe", () => {
    test("should compose functions from left to right", () => {
        const double = (x) => x * 2;
        const addOne = (x) => x + 1;
        const doubleAndAddOne = pipe(double, addOne);
        expect(doubleAndAddOne(3)).toBe(7);
    });

    test("should return identity function if no functions are provided", () => {
        const identity = pipe();
        expect(identity(5)).toBe(5);
    });
});
