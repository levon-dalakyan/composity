import { map } from "./map";

describe("map", () => {
    test("should apply the transformer to each element", () => {
        const double = (x) => x * 2;
        expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    });

    test("should return an empty array for empty input", () => {
        expect(map((x) => x, [])).toEqual([]);
    });
});
