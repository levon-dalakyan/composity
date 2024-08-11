import { clone } from "./clone";

describe("clone", () => {
    test("should create a deep copy of an object", () => {
        const original = { a: 1, b: { c: 2 } };
        const cloned = clone(original);

        expect(cloned).toEqual(original);
        expect(cloned).not.toBe(original);
        expect(cloned.b).not.toBe(original.b);
    });

    test("should create a deep copy of an array", () => {
        const original = [1, [2, 3], { a: 4 }];
        const cloned = clone(original);

        expect(cloned).toEqual(original);
        expect(cloned).not.toBe(original);
        expect(cloned[1]).not.toBe(original[1]);
        expect(cloned[2]).not.toBe(original[2]);
    });

    test("should return primitives as is", () => {
        expect(clone(5)).toBe(5);
        expect(clone("hello")).toBe("hello");
        expect(clone(null)).toBeNull();
        expect(clone(undefined)).toBeUndefined();
    });
});
