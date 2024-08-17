import { iRepeat } from "./iRepeat";

describe("iRepeat", () => {
    test("repeats iterable infinitely when no amount specified", () => {
        const iterator = iRepeat()([1, 2]);
        expect([...Array(6)].map(() => iterator.next().value)).toEqual([
            1, 2, 1, 2, 1, 2,
        ]);
    });

    test("repeats iterable specified number of times", () => {
        const result = [...iRepeat(2)([1, 2])];
        expect(result).toEqual([1, 2, 1, 2]);
    });

    test("returns empty iterable when amount is 0", () => {
        const result = [...iRepeat(0)([1, 2])];
        expect(result).toEqual([]);
    });
});
