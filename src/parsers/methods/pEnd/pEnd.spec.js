import { _ParsingError } from "../../utils";
import { pEnd } from "./pEnd";

describe("pEnd", () => {
    const endParser = pEnd();

    test("succeeds on empty input", () => {
        expect(endParser([])).toEqual({
            type: "END",
            value: null,
            rest: expect.any(Object),
        });
    });

    test("throws error on non-empty input", () => {
        expect(() => endParser(["a"])).toThrow(_ParsingError);
    });
});
