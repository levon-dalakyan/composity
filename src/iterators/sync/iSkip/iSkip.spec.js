import { iSkip } from "./iSkip";

describe("iSkip", () => {
    test("skips specified number of elements", () => {
        const result = [...iSkip(2)([1, 2, 3, 4, 5])];
        expect(result).toEqual([3, 4, 5]);
    });

    test("returns empty iterable when skipping more than available", () => {
        const result = [...iSkip(10)([1, 2, 3])];
        expect(result).toEqual([]);
    });

    test("skips one element by default", () => {
        const result = [...iSkip()([1, 2, 3, 4, 5])];
        expect(result).toEqual([2, 3, 4, 5]);
    });
});
