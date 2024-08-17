import { _isInteger } from "./_isInteger";

describe("_isInteger", () => {
    test("identifies integers correctly", () => {
        expect(_isInteger(5)).toBe(true);
        expect(_isInteger(-3)).toBe(true);
        expect(_isInteger(0)).toBe(true);
        expect(_isInteger(3.14)).toBe(false);
        expect(_isInteger("5")).toBe(false);
    });
});
