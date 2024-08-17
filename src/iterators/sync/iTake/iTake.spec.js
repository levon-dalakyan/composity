import { iTake } from "./iTake";

describe("iTake", () => {
    test("takes specified number of elements", () => {
        const result = [...iTake(3)([1, 2, 3, 4, 5])];
        expect(result).toEqual([1, 2, 3]);
    });

    test("takes all elements if amount exceeds iterable length", () => {
        const result = [...iTake(10)([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable when taking 0 elements", () => {
        const result = [...iTake(0)([1, 2, 3])];
        expect(result).toEqual([]);
    });
});
