import { mergeAll } from "./mergeAll";

describe("mergeAll", () => {
    test("should merge multiple objects", () => {
        expect(mergeAll({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
            a: 1,
            b: 2,
            c: 3,
        });
    });

    test("should override properties with later objects", () => {
        expect(mergeAll({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({
            a: 1,
            b: 3,
            c: 4,
        });
    });

    test("should ignore non-object arguments", () => {
        expect(mergeAll({ a: 1 }, null, { b: 2 }, 42)).toEqual({ a: 1, b: 2 });
    });
});
