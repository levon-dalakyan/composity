import { lProp } from "../lProp";
import { lView } from "./lView";

describe("lView", () => {
    it("should retrieve a value focused by a lens", () => {
        const obj = { count: 5 };
        const countLens = lProp("count");
        expect(lView(countLens, obj)).toBe(5);
    });
});
