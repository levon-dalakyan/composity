import { iPipe } from "./iPipe";

describe("iPipe", () => {
    const iDouble = (iterable) => ({
        *[Symbol.iterator]() {
            for (const item of iterable) {
                yield item * 2;
            }
        },
    });

    const iAddOne = (iterable) => ({
        *[Symbol.iterator]() {
            for (const item of iterable) {
                yield item + 1;
            }
        },
    });

    test("should pipe functions correctly", () => {
        const piped = iPipe(iAddOne, iDouble);
        const result = [...piped([1, 2, 3])];
        expect(result).toEqual([4, 6, 8]);
    });

    test("should handle empty input", () => {
        const piped = iPipe(iAddOne, iDouble);
        const result = [...piped([])];
        expect(result).toEqual([]);
    });

    test("should return original iterable when no functions are provided", () => {
        const piped = iPipe();
        const result = [...piped([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
    });
});
