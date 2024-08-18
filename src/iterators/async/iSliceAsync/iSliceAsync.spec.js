import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iSliceAsync } from "./iSliceAsync";

describe("iSliceAsync", () => {
    test("returns slice of iterable", async () => {
        const result = await iToArrayAsync(
            iSliceAsync(1, 4)(_createAsyncIterable([0, 1, 2, 3, 4, 5]))
        );
        expect(result).toEqual([1, 2, 3]);
    });

    test("handles out of range indices", async () => {
        const result = await iToArrayAsync(
            iSliceAsync(2, 10)(_createAsyncIterable([0, 1, 2, 3, 4]))
        );
        expect(result).toEqual([2, 3, 4]);
    });

    test("returns empty iterable for invalid range", async () => {
        const result = await iToArrayAsync(
            iSliceAsync(4, 2)(_createAsyncIterable([0, 1, 2, 3, 4]))
        );
        expect(result).toEqual([]);
    });
});
