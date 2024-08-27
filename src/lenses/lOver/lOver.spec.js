import { lProp } from "../lProp";
import { lOver } from "./lOver";

describe("lOver", () => {
    it("should apply a modifier function to a focused value", () => {
        const obj = { count: 5 };
        const countLens = lProp("count");
        const result = lOver(countLens, (x) => x + 1, obj);
        expect(result).toEqual({ count: 6 });
    });
});
