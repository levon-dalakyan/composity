import { lProp } from "../lProp";
import { lView } from "../lView";
import { lSet } from "../lSet";
import { lCompose } from "./lCompose";

describe("lCompose", () => {
    it("should compose multiple lenses", () => {
        const obj = { a: { b: { c: 42 } } };
        const lensA = lProp("a");
        const lensB = lProp("b");
        const lensC = lProp("c");
        const composed = lCompose(lensA, lensB, lensC);
        expect(lView(composed, obj)).toBe(42);
        expect(lSet(composed, 100, obj)).toEqual({ a: { b: { c: 100 } } });
    });
});
