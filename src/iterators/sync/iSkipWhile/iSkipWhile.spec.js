import { iSkipWhile } from "./iSkipWhile";

describe("iSkipWhile", () => {
    test("skips elements while predicate is true", () => {
        const isLessThan3 = (x) => x < 3;
        const result = [...iSkipWhile(isLessThan3)([1, 2, 3, 4, 2, 1])];
        expect(result).toEqual([3, 4, 2, 1]);
    });

    test("returns all elements if predicate is always false", () => {
        const alwaysFalse = () => false;
        const result = [...iSkipWhile(alwaysFalse)([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable if predicate is always true", () => {
        const alwaysTrue = () => true;
        const result = [...iSkipWhile(alwaysTrue)([1, 2, 3])];
        expect(result).toEqual([]);
    });
});
