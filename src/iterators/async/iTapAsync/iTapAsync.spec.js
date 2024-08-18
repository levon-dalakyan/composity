import { jest } from "@jest/globals";
import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iTapAsync } from "./iTapAsync";

describe("iTapAsync", () => {
    test("applies side effect without modifying iterable", async () => {
        const sideEffect = jest.fn();
        const result = await iToArrayAsync(
            iTapAsync(sideEffect)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([1, 2, 3]);
        expect(sideEffect).toHaveBeenCalledTimes(3);
        expect(sideEffect).toHaveBeenCalledWith(1);
        expect(sideEffect).toHaveBeenCalledWith(2);
        expect(sideEffect).toHaveBeenCalledWith(3);
    });
});
