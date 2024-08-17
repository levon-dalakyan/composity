import { iJoin } from "./iJoin";

describe("iJoin", () => {
    test("joins elements with default separator", () => {
        const result = iJoin()(["a", "b", "c"]);
        expect(result).toBe("abc");
    });

    test("joins elements with custom separator", () => {
        const result = iJoin(", ")(["a", "b", "c"]);
        expect(result).toBe("a, b, c");
    });

    test("returns empty string for empty iterable", () => {
        const result = iJoin()([]);
        expect(result).toBe("");
    });
});
