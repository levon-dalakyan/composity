import { _isPlaceholder } from "./_isPlaceholder";

describe("private/_isPlaceholder", () => {
    it("should return true for an object with the @@functiolize/placeholder property", () => {
        const obj = { "@@functiolize/placeholder": true };
        expect(_isPlaceholder(obj)).toBe(true);
    });

    it("should return false for an object without the @@functiolize/placeholder property", () => {
        const obj = { foo: "bar" };
        expect(_isPlaceholder(obj)).toBe(false);
    });

    it("should return false for null", () => {
        expect(_isPlaceholder(null)).toBe(false);
    });

    it("should return false for a non-object", () => {
        expect(_isPlaceholder(1)).toBe(false);
        expect(_isPlaceholder("foo")).toBe(false);
        expect(_isPlaceholder(true)).toBe(false);
    });
});
