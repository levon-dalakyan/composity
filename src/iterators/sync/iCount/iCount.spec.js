import { iCount } from "./iCount";

describe("iCount", () => {
    test("counts elements in iterable", () => {
        expect(iCount([1, 2, 3, 4, 5])).toBe(5);
    });

    test("returns 0 for empty iterable", () => {
        expect(iCount([])).toBe(0);
    });
});
