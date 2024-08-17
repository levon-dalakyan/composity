import { iSum } from "./iSum";

describe("iSum", () => {
    test("calculates sum of iterable", () => {
        expect(iSum([1, 2, 3, 4])).toBe(10);
    });

    test("returns 0 for empty iterable", () => {
        expect(iSum([])).toBe(0);
    });
});
