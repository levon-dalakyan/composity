import { head } from "./head";

describe("head", () => {
    test("should return the first element of an array", () => {
        expect(head([1, 2, 3])).toBe(1);
    });

    test("should return the first character of a string", () => {
        expect(head("hello")).toBe("h");
    });

    test("should throw TypeError for non-array and non-string inputs", () => {
        expect(() => head(123)).toThrow(TypeError);
        expect(() => head({})).toThrow(TypeError);
    });
});
