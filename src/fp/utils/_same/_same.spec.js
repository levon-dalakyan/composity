import { _same } from "./_same";

describe("_same", () => {
    test("returns the same argument", () => {
        expect(_same(5)).toBe(5);
        expect(_same("test")).toBe("test");
        const obj = {};
        expect(_same(obj)).toBe(obj);
    });
});
