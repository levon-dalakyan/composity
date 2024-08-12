import { every } from "./every";

describe("every", () => {
    test("should return true if all elements satisfy the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(every(isEven, [2, 4, 6, 8])).toBe(true);
    });

    test("should return false if any element does not satisfy the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(every(isEven, [2, 4, 5, 8])).toBe(false);
    });

    test("should return true for an empty array", () => {
        expect(every(() => false, [])).toBe(true);
    });
});
