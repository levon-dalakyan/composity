import { _ParsingError } from "../../utils";
import { pTag } from "./pTag";

describe("pTag", () => {
    test("parses string tag", () => {
        const aParser = pTag("a");
        expect(aParser("abc")).toEqual({
            type: "TAG",
            value: "a",
            rest: expect.any(Object),
        });
    });

    test("parses regex tag", () => {
        const digitParser = pTag(/\d/);
        expect(digitParser("123")).toEqual({
            type: "TAG",
            value: "1",
            rest: expect.any(Object),
        });
    });

    test("parses function tag", () => {
        const evenDigitParser = pTag((x) => parseInt(x) % 2 === 0);
        expect(evenDigitParser("2")).toEqual({
            type: "TAG",
            value: "2",
            rest: expect.any(Object),
        });
    });

    test("throws error on mismatch", () => {
        const digitParser = pTag(/\d/);
        expect(() => digitParser("a")).toThrow(_ParsingError);
    });
});
