import { _ParsingError } from "../../utils";
import { pTag } from "../pTag";
import { pRepeat } from "./pRepeat";

describe("pRepeat", () => {
    const digitParser = pTag(/\d/);
    const twoToFourDigits = pRepeat(digitParser, { min: 2, max: 4 });

    test("parses repeated occurrences within range", () => {
        expect(twoToFourDigits("123abc")).toEqual({
            type: "REPEAT",
            value: "123",
            rest: expect.any(Object),
        });
        expect(twoToFourDigits("12345abc")).toEqual({
            type: "REPEAT",
            value: "1234",
            rest: expect.any(Object),
        });
    });

    test("throws error when below minimum occurrences", () => {
        expect(() => twoToFourDigits("1abc")).toThrow(_ParsingError);
    });
});
