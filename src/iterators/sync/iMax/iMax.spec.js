import { iMax } from "./iMax";

describe("iMax", () => {
    test("finds maximum value in iterable", () => {
        expect(iMax([1, 5, 3, 9, 2])).toBe(9);
    });

    test("returns -Infinity for empty iterable", () => {
        expect(iMax([])).toBe(-Infinity);
    });
});
