import { prop } from "./prop";

describe("prop", () => {
    test("should return the value at the specified property of an object", () => {
        const person = { name: "Alice", age: 30 };
        expect(prop("name", person)).toBe("Alice");
        expect(prop("age", person)).toBe(30);
    });

    test("should work with array indices", () => {
        const numbers = [10, 20, 30];
        expect(prop(1, numbers)).toBe(20);
    });

    test("should return undefined for non-existent properties", () => {
        const obj = { a: 1 };
        const arr = [1, 2, 3];
        expect(prop("b", obj)).toBeUndefined();
        expect(prop(3, arr)).toBeUndefined();
    });
});
