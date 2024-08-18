import { pTag } from "../pTag";
import { pMany } from "./pMany";

describe("pMany", () => {
    const digitParser = pTag(/\d/);
    const manyDigitsParser = pMany(digitParser);

    test("parses zero or more occurrences", () => {
        expect(manyDigitsParser("123abc")).toEqual({
            type: "REPEAT",
            value: "123",
            rest: expect.any(Object),
        });
        expect(manyDigitsParser("abc")).toEqual({
            type: "REPEAT",
            value: "",
            rest: expect.any(Object),
        });
    });
});
