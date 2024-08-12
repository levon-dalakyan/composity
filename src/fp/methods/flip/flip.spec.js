import { flip } from "./flip";

describe("flip", () => {
    test("should reverse the order of arguments", () => {
        const subtract = (a, b) => a - b;
        const flippedSubtract = flip(subtract);
        expect(flippedSubtract(3, 7)).toBe(4);
    });

    test("should work with more than two arguments", () => {
        const divideAndAdd = (a, b, c) => a / b + c;
        const flippedDivideAndAdd = flip(divideAndAdd);
        expect(flippedDivideAndAdd(2, 10, 50)).toBe(7); // (50 / 10) + 2
    });

    test("should maintain the original function's arity", () => {
        const original = (a, b, c) => [a, b, c];
        const flipped = flip(original);
        expect(flipped.length).toBe(3);
    });
});
