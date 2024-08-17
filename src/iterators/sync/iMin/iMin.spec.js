import { iMin } from "./iMin";

describe("iMin", () => {
    test("finds minimum value in iterable", () => {
        expect(iMin([5, 3, 9, 1, 2])).toBe(1);
    });

    test("returns Infinity for empty iterable", () => {
        expect(iMin([])).toBe(Infinity);
    });
});
