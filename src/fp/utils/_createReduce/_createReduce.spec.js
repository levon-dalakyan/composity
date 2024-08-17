import { jest } from "@jest/globals";
import { _createReduce } from "./_createReduce";

describe("_createReduce", () => {
    test("creates a reduce function for arrays", () => {
        const reduceArray = jest.fn((fn, init, arr) => arr.reduce(fn, init));
        const reduce = _createReduce(reduceArray, jest.fn(), jest.fn());
        const result = reduce((acc, val) => acc + val, 0, [1, 2, 3]);
        expect(result).toBe(6);
        expect(reduceArray).toHaveBeenCalled();
    });

    test("creates a reduce function for iterables", () => {
        const reduceIterator = jest.fn((fn, init, iter) => {
            let acc = init;
            for (const val of iter) {
                acc = fn(acc, val);
            }
            return acc;
        });
        const reduce = _createReduce(jest.fn(), reduceIterator, jest.fn());
        const result = reduce((acc, val) => acc + val, 0, new Set([1, 2, 3]));
        expect(result).toBe(6);
        expect(reduceIterator).toHaveBeenCalled();
    });

    test("throws error for non-iterable objects", () => {
        const reduce = _createReduce(jest.fn(), jest.fn(), jest.fn());
        expect(() => reduce(() => {}, 0, {})).toThrow(
            "Cannot reduce a non-iterable object"
        );
    });
});
