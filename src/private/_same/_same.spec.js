import { _same } from "./_same";

describe("private/_same", () => {
    it("should return the same value for a primitive", () => {
        expect(_same(1)).toBe(1);
        expect(_same("hello")).toBe("hello");
        expect(_same(true)).toBe(true);
    });

    it("should return the same object reference for an object", () => {
        const obj = { foo: "bar" };
        expect(_same(obj)).toBe(obj);
    });

    it("should return the same array reference for an array", () => {
        const arr = [1, 2, 3];
        expect(_same(arr)).toBe(arr);
    });

    it("should return the same function reference for a function", () => {
        const func = () => {};
        expect(_same(func)).toBe(func);
    });
});
