import { pTag } from "../pTag";
import { pOpt } from "./pOpt";

describe("pOpt", () => {
    const digitParser = pTag(/\d/);
    const optDigitParser = pOpt(digitParser);

    test("parses optional occurrence", () => {
        expect(optDigitParser("1abc")).toEqual({
            type: "OPT",
            value: "1",
            rest: expect.any(Object),
        });
        expect(optDigitParser("abc")).toEqual({
            type: "OPT",
            value: null,
            rest: "abc",
        });
    });
});
