import { iAppend } from "./iAppend";

describe("iAppend", () => {
    test("appends multiple iterables", () => {
        const result = iAppend([4, 5, 6], [7, 8])([1, 2, 3]);
        expect([...result]).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test("works with empty iterables", () => {
        const result = iAppend([], [])([]);
        expect([...result]).toEqual([]);
    });
});
