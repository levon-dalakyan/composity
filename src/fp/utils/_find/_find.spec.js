import { _find } from "./_find";

describe("_find", () => {
    test("finds element in array", () => {
        expect(_find((x) => x > 5, [1, 3, 5, 7, 9])).toBe(7);
    });

    test("finds element in string", () => {
        expect(_find((x) => x === "o", "hello")).toBe("o");
    });

    test("finds element in iterable", () => {
        expect(_find((x) => x % 2 === 0, new Set([1, 2, 3, 4]))).toBe(2);
    });

    test("returns undefined if not found", () => {
        expect(_find((x) => x > 10, [1, 2, 3])).toBeUndefined();
    });

    test("throws TypeError for non-iterable", () => {
        expect(() => _find((x) => x, {})).toThrow(TypeError);
    });
});
