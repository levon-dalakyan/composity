import { _ParsingError } from "../../utils";
import { pTake } from "./pTake";

describe("pTake", () => {
    const digitTaker = pTake(/\d/, { min: 2, max: 4 });

    test("takes specified number of matches", () => {
        expect(digitTaker("123abc")).toEqual({
            type: "TAKE",
            value: "123",
            rest: expect.any(Object),
        });
        expect(digitTaker("12345abc")).toEqual({
            type: "TAKE",
            value: "1234",
            rest: expect.any(Object),
        });
    });

    test("throws error when below minimum matches", () => {
        expect(() => digitTaker("1abc")).toThrow(_ParsingError);
    });
});
