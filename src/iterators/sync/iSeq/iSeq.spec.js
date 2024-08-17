import { iSeq } from "./iSeq";

describe("iSeq", () => {
    test("concatenates multiple iterables", () => {
        const result = [...iSeq([1, 2], [3, 4], [5, 6])];
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("works with empty iterables", () => {
        const result = [...iSeq([], [], [])];
        expect(result).toEqual([]);
    });

    test("skips empty iterables", () => {
        const result = [...iSeq([1, 2], [], [3, 4], [], [5, 6])];
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
