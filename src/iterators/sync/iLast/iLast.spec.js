import { iLast } from "./iLast";

describe("iLast", () => {
    test("returns last element of non-empty iterable", () => {
        expect(iLast([1, 2, 3])).toBe(3);
    });

    test("returns undefined for empty iterable", () => {
        expect(iLast([])).toBeUndefined();
    });
});
