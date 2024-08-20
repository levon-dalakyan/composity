import { iCompose } from "./iCompose";

describe("iCompose", () => {
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

    test("should compose functions correctly", () => {
        const composed = iCompose(iDouble, iAddOne);
        const result = [...composed([1, 2, 3])];
        expect(result).toEqual([4, 6, 8]);
    });

    test("should handle empty input", () => {
        const composed = iCompose(iDouble, iAddOne);
        const result = [...composed([])];
        expect(result).toEqual([]);
    });

    test("should return original iterable when no functions are provided", () => {
        const composed = iCompose();
        const result = [...composed([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
    });
});
