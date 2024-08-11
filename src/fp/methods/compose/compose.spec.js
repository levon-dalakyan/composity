import { compose } from "./compose";

describe("compose", () => {
    test("should compose multiple functions from right to left", () => {
        const double = (x) => x * 2;
        const addOne = (x) => x + 1;
        const square = (x) => x * x;

        const composed = compose(square, addOne, double);

        expect(composed(3)).toBe(49); // ((3 * 2) + 1)^2 = 49
    });

    test("should work with a single function", () => {
        const double = (x) => x * 2;
        const composed = compose(double);

        expect(composed(5)).toBe(10);
    });

    test("should return the argument if no functions are provided", () => {
        const composed = compose();

        expect(composed(5)).toBe(5);
    });
});
