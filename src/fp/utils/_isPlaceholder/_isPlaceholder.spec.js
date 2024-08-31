import { _isPlaceholder } from "./_isPlaceholder";

describe("_isPlaceholder", () => {
    test("identifies placeholders correctly", () => {
        expect(_isPlaceholder({ "@@composity/placeholder": true })).toBe(true);
        expect(_isPlaceholder({})).toBe(false);
        expect(_isPlaceholder(null)).toBe(false);
        expect(_isPlaceholder(undefined)).toBe(false);
    });
});
