import { _reduce } from "./_reduce";

describe("_reduce", () => {
    test("reduces array correctly", () => {
        expect(_reduce((acc, val) => acc + val, 0, [1, 2, 3, 4])).toBe(10);
    });

    test("reduces iterable correctly", () => {
        expect(_reduce((acc, val) => acc + val, 0, new Set([1, 2, 3, 4]))).toBe(
            10
        );
    });
});
