import { lView } from "../lView";
import { lSet } from "../lSet";
import { lPath } from "./lPath";

describe("lPath", () => {
    it("should create a lens for a nested path", () => {
        const obj = { user: { friends: ["Alice", "Bob"] } };
        const firstFriendLens = lPath("user", "friends", 0);
        expect(lView(firstFriendLens, obj)).toBe("Alice");
        expect(lSet(firstFriendLens, "Charlie", obj)).toEqual({
            user: { friends: ["Charlie", "Bob"] },
        });
    });
});
