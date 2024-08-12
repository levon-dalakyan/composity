import { values } from "./values";

describe("values", () => {
    test("should return an array of object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(values(obj)).toEqual([1, 2, 3]);
    });

    test("should return an empty array for an empty object", () => {
        expect(values({})).toEqual([]);
    });

    test("should handle objects with non-enumerable properties", () => {
        const obj = Object.create(
            {},
            {
                a: { value: 1, enumerable: true },
                b: { value: 2, enumerable: false },
            }
        );
        expect(values(obj)).toEqual([1]);
    });
});
