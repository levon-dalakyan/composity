import { iTakeWhile } from "./iTakeWhile";

describe("iTakeWhile", () => {
    test("takes elements while predicate is true", () => {
        const isLessThan3 = (x) => x < 3;
        const result = [...iTakeWhile(isLessThan3)([1, 2, 3, 4, 1, 2])];
        expect(result).toEqual([1, 2]);
    });

    test("takes all elements if predicate is always true", () => {
        const alwaysTrue = () => true;
        const result = [...iTakeWhile(alwaysTrue)([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable if predicate is always false", () => {
        const alwaysFalse = () => false;
        const result = [...iTakeWhile(alwaysFalse)([1, 2, 3])];
        expect(result).toEqual([]);
    });
});
