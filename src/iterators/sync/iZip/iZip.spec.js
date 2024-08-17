import { iZip } from "./iZip";

describe("iZip", () => {
    test("zips multiple iterables", () => {
        const result = [...iZip([1, 2, 3], ["a", "b", "c"], [true, false])];
        expect(result).toEqual([
            [1, "a", true],
            [2, "b", false],
            [3, "c", null],
        ]);
    });

    test("handles iterables of different lengths", () => {
        const result = [...iZip([1, 2], ["a", "b", "c"], [true])];
        expect(result).toEqual([
            [1, "a", true],
            [2, "b", null],
        ]);
    });

    test("handles iterables of same length", () => {
        const result = [...iZip([1, 2], ["a", "b"], [true, false])];
        expect(result).toEqual([
            [1, "a", true],
            [2, "b", false],
        ]);
    });

    test("returns empty iterable for empty input", () => {
        const result = [...iZip()];
        expect(result).toEqual([]);
    });
});
