import { lView } from "../lView";
import { lSet } from "../lSet";
import { lProp } from "./lProp";

describe("lProp", () => {
    it("should create a lens for an object property", () => {
        const obj = { name: "Alice", age: 30 };
        const nameLens = lProp("name");
        expect(lView(nameLens, obj)).toBe("Alice");
        expect(lSet(nameLens, "Bob", obj)).toEqual({ name: "Bob", age: 30 });
    });
});
