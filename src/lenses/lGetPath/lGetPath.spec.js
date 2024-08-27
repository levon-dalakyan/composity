import { lGetPath } from "./lGetPath";

describe("lGetPath", () => {
    it("should get a value at a specified path", () => {
        const obj = { user: { profile: { name: "Alice" } } };
        expect(lGetPath(obj, ["user", "profile", "name"])).toBe("Alice");
    });

    it("should return undefined for non-existent paths", () => {
        const obj = { user: {} };
        expect(lGetPath(obj, ["user", "profile", "name"])).toBeUndefined();
    });
});
