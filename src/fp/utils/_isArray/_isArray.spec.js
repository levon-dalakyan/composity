import { _isArray } from "./_isArray";

describe("_isArray", () => {
    test("identifies arrays correctly", () => {
        expect(_isArray([])).toBe(true);
        expect(_isArray([1, 2, 3])).toBe(true);
        expect(_isArray({})).toBe(false);
        expect(_isArray("array")).toBe(false);
    });
});
