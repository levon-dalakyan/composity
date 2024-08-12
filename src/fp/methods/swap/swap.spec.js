import { swap } from "./swap";

describe("swap", () => {
    test("should swap elements in an array", () => {
        expect(swap(0, 2, [1, 2, 3])).toEqual([3, 2, 1]);
    });

    test("should swap properties in an object", () => {
        expect(swap("a", "b", { a: 1, b: 2, c: 3 })).toEqual({
            a: 2,
            b: 1,
            c: 3,
        });
    });

    test("should swap characters in a string", () => {
        expect(swap(0, 2, "abc")).toBe("cba");
    });

    test("should return the same array if indices are out of bounds", () => {
        expect(swap(0, 5, [1, 2, 3])).toEqual([1, 2, 3]);
    });
});
