import { tail } from "./tail";

describe("tail", () => {
    test("should return all but the first element of an array", () => {
        expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });

    test("should return all but the first character of a string", () => {
        expect(tail("hello")).toBe("ello");
    });

    test("should return an empty array for a single-element array", () => {
        expect(tail([1])).toEqual([]);
    });

    test("should return an empty string for a single-character string", () => {
        expect(tail("h")).toBe("");
    });

    test("should throw TypeError for non-array and non-string inputs", () => {
        expect(() => tail(123)).toThrow(TypeError);
        expect(() => tail({})).toThrow(TypeError);
    });
});
