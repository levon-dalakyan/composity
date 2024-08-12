import { jest } from "@jest/globals";
import { memoize } from "./memoize";

describe("memoize", () => {
    test("should cache function results", () => {
        const mockFn = jest.fn((x) => x * 2);
        const memoized = memoize(mockFn);

        expect(memoized(4)).toBe(8);
        expect(memoized(4)).toBe(8);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test("should work with multiple arguments", () => {
        const mockFn = jest.fn((a, b) => a + b);
        const memoized = memoize(mockFn);

        expect(memoized(2, 3)).toBe(5);
        expect(memoized(2, 3)).toBe(5);
        expect(memoized(3, 2)).toBe(5);
        expect(mockFn).toHaveBeenCalledTimes(2);
    });
});
