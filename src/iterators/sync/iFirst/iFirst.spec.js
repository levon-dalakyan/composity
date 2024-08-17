import { iFirst } from "./iFirst";

describe("iFirst", () => {
    test("returns first element of iterable", () => {
        expect(iFirst([1, 2, 3])).toBe(1);
    });

    test("returns undefined for empty iterable", () => {
        expect(iFirst([])).toBeUndefined();
    });
});
