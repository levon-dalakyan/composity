import { curry } from "./curry";

describe("curry", () => {
    test("should curry a function with multiple arguments", () => {
        const add = (a, b, c) => a + b + c;
        const curriedAdd = curry(add);

        expect(curriedAdd(1)(2)(3)).toBe(6);
        expect(curriedAdd(1, 2)(3)).toBe(6);
        expect(curriedAdd(1)(2, 3)).toBe(6);
        expect(curriedAdd(1, 2, 3)).toBe(6);
    });

    test("should work with a function that takes one argument", () => {
        const double = (x) => x * 2;
        const curriedDouble = curry(double);

        expect(curriedDouble(5)).toBe(10);
    });

    test("should return the original function if it takes no arguments", () => {
        const constant = () => 42;
        const curriedConstant = curry(constant);

        expect(curriedConstant()).toBe(42);
    });
});
