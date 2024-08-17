import { iPrepend } from "./iPrepend";

describe("iPrepend", () => {
    test("prepends multiple iterables", () => {
        const result = [...iPrepend([1, 2], [3, 4])([5, 6])];
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("works with empty iterables", () => {
        const result = [...iPrepend([], [])([])];
        expect(result).toEqual([]);
    });
});
