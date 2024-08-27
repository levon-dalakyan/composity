import { lSet } from "../lSet";
import { lView } from "../lView";
import { lLens } from "./lLens";

describe("lLens", () => {
    it("should create a custom lens", () => {
        const upperCaseLens = lLens(
            (str) => str.toUpperCase(),
            (value, _) => value
        );
        expect(lView(upperCaseLens, "hello")).toBe("HELLO");
        expect(lSet(upperCaseLens, "WORLD", "hello")).toBe("WORLD");
    });
});
