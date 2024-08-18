import { _ParsingError } from "../../utils";
import { pTag } from "../pTag";
import { pMany1 } from "./pMany1";

describe("pMany1", () => {
    const digitParser = pTag(/\d/);
    const manyDigitsParser1 = pMany1(digitParser);

    test("parses one or more occurrences", () => {
        expect(manyDigitsParser1("123abc")).toEqual({
            type: "REPEAT",
            value: "123",
            rest: expect.any(Object),
        });
    });

    test("throws error on zero occurrences", () => {
        expect(() => manyDigitsParser1("abc")).toThrow(_ParsingError);
    });
});
