import { iToArray } from "./iToArray";

describe("iToArray", () => {
    test("converts iterable to array", () => {
        const generator = function* () {
            yield 1;
            yield 2;
            yield 3;
        };
        const result = iToArray(generator());
        expect(result).toEqual([1, 2, 3]);
    });

    test("works with empty iterable", () => {
        const generator = function* () {};
        const result = iToArray(generator());
        expect(result).toEqual([]);
    });
});
