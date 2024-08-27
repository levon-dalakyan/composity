import { lProp } from "../lProp";
import { lSet } from "./lSet";

describe("lSet", () => {
    it("should set a value focused by a lens", () => {
        const obj = { count: 5 };
        const countLens = lProp("count");
        const result = lSet(countLens, 10, obj);
        expect(result).toEqual({ count: 10 });
    });
});
