import { _reduceArray } from "./_reduceArray";

describe("_reduceArray", () => {
    test("reduces array correctly", () => {
        expect(_reduceArray((acc, val) => acc + val, 0, [1, 2, 3, 4])).toBe(10);
    });
});
