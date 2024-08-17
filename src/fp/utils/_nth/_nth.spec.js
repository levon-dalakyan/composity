import { _nth } from "./_nth";

describe("_nth", () => {
    test("retrieves correct element from array", () => {
        expect(_nth(2, [1, 2, 3, 4, 5])).toBe(3);
        expect(_nth(-1, [1, 2, 3, 4, 5])).toBe(5);
    });

    test("retrieves correct character from string", () => {
        expect(_nth(1, "hello")).toBe("e");
        expect(_nth(-2, "hello")).toBe("l");
    });
});
