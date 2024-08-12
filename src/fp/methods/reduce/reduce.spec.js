import { reduce } from "./reduce";

describe("reduce", () => {
    test("should reduce an array to a single value", () => {
        const sum = (acc, val) => acc + val;
        expect(reduce(sum, 0, [1, 2, 3, 4, 5])).toBe(15);
    });

    test("should work with other data types", () => {
        const concat = (acc, val) => acc + val;
        expect(reduce(concat, "", ["a", "b", "c"])).toBe("abc");
    });

    test("should return the initial value for an empty array", () => {
        const sum = (acc, val) => acc + val;
        expect(reduce(sum, 10, [])).toBe(10);
    });
});
