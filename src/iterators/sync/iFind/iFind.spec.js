import { iFind } from "./iFind";

describe("iFind", () => {
    test("finds first element matching predicate", () => {
        const isEven = (x) => x % 2 === 0;
        const result = iFind(isEven)([1, 2, 3, 4, 5]);
        expect(result).toBe(2);
    });

    test("returns undefined when no element matches", () => {
        const isNegative = (x) => x < 0;
        const result = iFind(isNegative)([1, 2, 3]);
        expect(result).toBeUndefined();
    });
});
