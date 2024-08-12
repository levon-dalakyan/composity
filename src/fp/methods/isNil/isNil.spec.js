import { isNil } from "./isNil";

describe("isNil", () => {
    test("should return true for null", () => {
        expect(isNil(null)).toBe(true);
    });

    test("should return true for undefined", () => {
        expect(isNil(undefined)).toBe(true);
    });

    test("should return false for non-null and non-undefined", () => {
        expect(isNil(0)).toBe(false);
        expect(isNil("")).toBe(false);
        expect(isNil(false)).toBe(false);
        expect(isNil({})).toBe(false);
    });
});
