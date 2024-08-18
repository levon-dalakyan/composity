import { _createAsyncIterable } from "../../utils";
import { iSumAsync } from "./iSumAsync";

describe("iSumAsync", () => {
    test("calculates sum of iterable", async () => {
        const result = await iSumAsync(_createAsyncIterable([1, 2, 3, 4]));
        expect(result).toBe(10);
    });

    test("returns 0 for empty iterable", async () => {
        const result = await iSumAsync(_createAsyncIterable([]));
        expect(result).toBe(0);
    });
});
