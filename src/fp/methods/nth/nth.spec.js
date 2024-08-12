import { nth } from "./nth";

describe("nth", () => {
    test("should return the nth element of a list", () => {
        expect(nth(1, ["a", "b", "c"])).toBe("b");
        expect(nth(0, [1, 2, 3])).toBe(1);
    });

    test("should return the nth element from the end of a list for negative indices", () => {
        expect(nth(-1, ["a", "b", "c"])).toBe("c");
        expect(nth(-2, [1, 2, 3])).toBe(2);
    });

    test("should return undefined for out-of-bounds indices", () => {
        expect(nth(5, [1, 2, 3])).toBeUndefined();
    });
});
