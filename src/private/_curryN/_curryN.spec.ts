import { _curryN } from "./_curryN";

describe("private/_curryN", () => {
    it("should return the correct result when all arguments are provided", () => {
        const sum = (a: number, b: number) => a + b;
        const curriedSum = _curryN(2, [1, 2], sum);
        expect(curriedSum()).toBe(3);
    });

    it("should correctly handle placeholders in the initial arguments", () => {
        const subtract = (a: number, b: number) => a - b;
        const curriedSubtract = _curryN(2, [3], subtract);
        expect(curriedSubtract(2)).toBe(1);
    });

    it("should preserve the context of the original function", () => {
        const context = {
            value: 10,
            subtract: function (a: number) {
                return this.value - a;
            },
        };
        const curriedSubtract = _curryN(1, [], context.subtract);
        expect(curriedSubtract.call(context, 3)).toBe(7);
    });

    it("should correctly curry when not all arguments are provided", () => {
        const multiply = (a: number, b: number, c: number) => a * b * c;
        const curriedMultiply = _curryN(3, [2], multiply);
        expect(curriedMultiply(3, 4)).toBe(24);
    });
});
