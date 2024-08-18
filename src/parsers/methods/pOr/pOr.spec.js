import { _ParsingError } from "../../utils";
import { pTag } from "../pTag";
import { pOr } from "./pOr";

describe("pOr", () => {
    const digitParser = pTag(/\d/);
    const letterParser = pTag(/[a-z]/i);
    const digitOrLetterParser = pOr(digitParser, letterParser);

    test("parses alternative options", () => {
        expect(digitOrLetterParser("1abc")).toEqual({
            type: "OR",
            value: "1",
            rest: expect.any(Object),
        });
        expect(digitOrLetterParser("abc")).toEqual({
            type: "OR",
            value: "a",
            rest: expect.any(Object),
        });
    });

    test("throws error when no alternative matches", () => {
        expect(() => digitOrLetterParser("_abc")).toThrow(_ParsingError);
    });
});
