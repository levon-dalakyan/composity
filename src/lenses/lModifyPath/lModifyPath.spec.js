import { lModifyPath } from "./lModifyPath";

describe("lModifyPath", () => {
    it("should modify a value at a specified path", () => {
        const obj = { user: { score: 10 } };
        const result = lModifyPath(
            obj,
            ["user", "score"],
            (score) => score * 2
        );
        expect(result).toEqual({ user: { score: 20 } });
    });
});
