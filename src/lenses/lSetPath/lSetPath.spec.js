import { lSetPath } from "./lSetPath";

describe("lSetPath", () => {
    it("should set a value at a specified path", () => {
        const obj = { user: { profile: { name: "Alice" } } };
        const result = lSetPath(obj, ["user", "profile", "name"], "Bob");
        expect(result).toEqual({ user: { profile: { name: "Bob" } } });
    });

    it("should create intermediate objects if they don't exist", () => {
        const obj = {};
        const result = lSetPath(obj, ["user", "profile", "name"], "Alice");
        expect(result).toEqual({ user: { profile: { name: "Alice" } } });
    });
});
