import { filter } from "./filter";

describe("filter", () => {
    test("should filter elements based on the predicate", () => {
        const isEven = (x) => x % 2 === 0;
        expect(filter(isEven, [1, 2, 3, 4, 5])).toEqual([2, 4]);
    });

    test("should return an empty array if no elements satisfy the predicate", () => {
        const isNegative = (x) => x < 0;
        expect(filter(isNegative, [1, 2, 3, 4, 5])).toEqual([]);
    });

    test("should return an empty array for an empty input array", () => {
        expect(filter(() => true, [])).toEqual([]);
    });
});
