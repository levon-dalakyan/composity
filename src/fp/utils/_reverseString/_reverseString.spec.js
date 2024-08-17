import { _reverseString } from "./_reverseString";

describe("_reverseString", () => {
    test("reverses string correctly", () => {
        expect(_reverseString("hello")).toBe("olleh");
    });

    test("handles empty string", () => {
        expect(_reverseString("")).toBe("");
    });
});
