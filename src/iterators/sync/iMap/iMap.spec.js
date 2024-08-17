import { iMap } from "./iMap";

describe("iMap", () => {
    test("applies function to each element", () => {
        const double = (x) => x * 2;
        const result = [...iMap(double)([1, 2, 3])];
        expect(result).toEqual([2, 4, 6]);
    });

    test("works with empty iterable", () => {
        const double = (x) => x * 2;
        const result = [...iMap(double)([])];
        expect(result).toEqual([]);
    });
});
