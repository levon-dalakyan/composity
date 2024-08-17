import { iAverage } from "./iAverage";

describe("iAverage", () => {
    test("calculates average of numbers", () => {
        expect(iAverage([1, 2, 3, 4, 5])).toBe(3);
    });

    test("returns 0 for empty iterable", () => {
        expect(iAverage([])).toBe(0);
    });

    test("handles negative numbers", () => {
        expect(iAverage([-1, 0, 1])).toBe(0);
    });
});
