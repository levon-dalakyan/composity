import { iSlice } from "./iSlice";

describe("iSlice", () => {
    test("returns slice of iterable", () => {
        const result = [...iSlice(1, 4)([0, 1, 2, 3, 4, 5])];
        expect(result).toEqual([1, 2, 3]);
    });

    test("handles out of range indices", () => {
        const result = [...iSlice(2, 10)([0, 1, 2, 3, 4])];
        expect(result).toEqual([2, 3, 4]);
    });

    test("returns empty iterable for invalid range", () => {
        const result = [...iSlice(4, 2)([0, 1, 2, 3, 4])];
        expect(result).toEqual([]);
    });
});
