import { iProduct } from "./iProduct";

describe("iProduct", () => {
    test("calculates product of iterable", () => {
        expect(iProduct([1, 2, 3, 4])).toBe(24);
    });

    test("returns undefined for empty iterable", () => {
        expect(iProduct([])).toBeUndefined();
    });
});
