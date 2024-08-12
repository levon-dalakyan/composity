import { find } from "./find";

describe("find", () => {
    test("should find the first element satisfying the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(find(isEven, [1, 3, 4, 5])).toBe(4);
    });

    test("should return undefined if no element satisfies the predicate", () => {
        const isNegative = (x) => x < 0;
        expect(find(isNegative, [1, 2, 3, 4, 5])).toBeUndefined();
    });

    test("should return undefined for an empty array", () => {
        expect(find(() => true, [])).toBeUndefined();
    });
});
