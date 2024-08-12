import { keys } from "./keys";

describe("keys", () => {
    test("should return an array of object keys", () => {
        expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
    });

    test("should return an empty array for non-objects", () => {
        expect(keys(null)).toEqual([]);
        expect(keys(undefined)).toEqual([]);
        expect(keys(42)).toEqual([]);
    });
});
