import { lView } from "../lView";
import { lSet } from "../lSet";
import { lIndex } from "./lIndex";

describe("lIndex", () => {
    it("should create a lens for an array index", () => {
        const arr = ["a", "b", "c"];
        const secondElement = lIndex(1);
        expect(lView(secondElement, arr)).toBe("b");
        expect(lSet(secondElement, "x", arr)).toEqual(["a", "x", "c"]);
    });
});
