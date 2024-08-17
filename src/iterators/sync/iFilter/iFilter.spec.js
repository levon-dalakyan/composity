import { iFilter } from "./iFilter";

describe("iFilter", () => {
    test("filters elements based on predicate", () => {
        const isEven = (x) => x % 2 === 0;
        const result = [...iFilter(isEven)([1, 2, 3, 4, 5])];
        expect(result).toEqual([2, 4]);
    });

    test("returns empty iterable when no elements match", () => {
        const isNegative = (x) => x < 0;
        const result = [...iFilter(isNegative)([1, 2, 3])];
        expect(result).toEqual([]);
    });
});
