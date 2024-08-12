import { some } from "./some";

describe("some", () => {
    test("should return true if at least one element satisfies the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(some(isEven, [1, 3, 5, 6, 7])).toBe(true);
    });

    test("should return false if no element satisfies the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(some(isEven, [1, 3, 5, 7])).toBe(false);
    });

    test("should return false for an empty array", () => {
        expect(some(() => true, [])).toBe(false);
    });
});
