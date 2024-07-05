import mergeAll from "./mergeAll";

describe("mergeAll", () => {
    it("should merge multiple objects into a single object", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const obj3 = { c: 5, d: 6 };

        const result = mergeAll(obj1, obj2, obj3);

        expect(result).toEqual({ a: 1, b: 3, c: 5, d: 6 });
    });

    it("should handle an empty arg", () => {
        const result = mergeAll();

        expect(result).toEqual({});
    });

    it("should handle a mix of object and non-object arguments", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = "hello";
        const obj4 = null;

        const result = mergeAll(obj1, obj2, obj3, obj4);

        expect(result).toEqual({ a: 1, b: 2 });
    });
});
