import { reverse } from "./reverse";

describe("reverse", () => {
    test("should reverse an array", () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test("should reverse a string", () => {
        expect(reverse("hello")).toBe("olleh");
    });

    test("should reverse an iterable", () => {
        const set = new Set([1, 2, 3]);
        expect([...reverse(set)]).toEqual([3, 2, 1]);
    });

    test("should reverse if collection has reverse method", () => {
        const collection = {
            reverse: () => [3, 2, 1],
        };
        expect(reverse(collection)).toEqual([3, 2, 1]);
    });

    test("should throw TypeError for non-reversible input", () => {
        expect(() => reverse(123)).toThrow(TypeError);
    });
});
