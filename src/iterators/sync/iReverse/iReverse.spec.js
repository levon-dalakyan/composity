import { iReverse } from "./iReverse";

describe("iReverse", () => {
    test("reverses non-empty iterable", () => {
        const result = [...iReverse([1, 2, 3])];
        expect(result).toEqual([3, 2, 1]);
    });

    test("works with empty iterable", () => {
        const result = [...iReverse([])];
        expect(result).toEqual([]);
    });
});
