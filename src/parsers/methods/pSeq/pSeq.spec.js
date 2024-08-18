import { _ParsingError } from "../../utils";
import { pTag } from "../pTag";
import { pSeq } from "./pSeq";

describe("pSeq", () => {
    const digitParser = pTag(/\d/);
    const letterParser = pTag(/[a-z]/i);
    const digitLetterSeq = pSeq(digitParser, letterParser);

    test("parses sequence of parsers", () => {
        expect(digitLetterSeq("1a23b")).toEqual({
            type: "SEQ",
            value: "1a",
            rest: expect.any(Object),
        });
    });

    test("throws error when sequence is not matched", () => {
        expect(() => digitLetterSeq("a1")).toThrow(_ParsingError);
    });
});
