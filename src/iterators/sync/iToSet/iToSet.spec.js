import { iToSet } from "./iToSet";

describe("iToSet", () => {
    test("converts iterable to set", () => {
        const generator = function* () {
            yield 1;
            yield 2;
            yield 3;
        };
        const result = iToSet(generator());
        expect(result).toEqual(new Set([1, 2, 3]));
    });

    test("works with empty iterable", () => {
        const generator = function* () {};
        const result = iToSet(generator());
        expect(result).toEqual(new Set());
    });
});
