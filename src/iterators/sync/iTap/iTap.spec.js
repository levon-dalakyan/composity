import { jest } from "@jest/globals";
import { iTap } from "./iTap";

describe("iTap", () => {
    test("applies side effect without modifying iterable", () => {
        const sideEffect = jest.fn();
        const result = [...iTap(sideEffect)([1, 2, 3])];
        expect(result).toEqual([1, 2, 3]);
        expect(sideEffect).toHaveBeenCalledTimes(3);
        expect(sideEffect).toHaveBeenCalledWith(1);
        expect(sideEffect).toHaveBeenCalledWith(2);
        expect(sideEffect).toHaveBeenCalledWith(3);
    });
});
