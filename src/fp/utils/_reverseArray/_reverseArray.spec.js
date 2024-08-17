import { _reverseArray } from "./_reverseArray";

describe("_reverseArray", () => {
    test("reverses array correctly", () => {
        expect(_reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    test("handles empty array", () => {
        expect(_reverseArray([])).toEqual([]);
    });
});
