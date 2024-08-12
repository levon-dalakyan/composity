import { jest } from "@jest/globals";
import { forEach } from "./forEach";

describe("forEach", () => {
    test("should iterate over array elements", () => {
        const mockFn = jest.fn();
        forEach(mockFn, [4, 5, 6]);
        expect(mockFn).toHaveBeenCalledTimes(3);
        expect(mockFn).toHaveBeenNthCalledWith(1, 4);
        expect(mockFn).toHaveBeenNthCalledWith(2, 5);
        expect(mockFn).toHaveBeenNthCalledWith(3, 6);
    });

    test("should return the original collection", () => {
        const arr = [1, 2, 3];
        expect(forEach(() => {}, arr)).toBe(arr);
    });
});
