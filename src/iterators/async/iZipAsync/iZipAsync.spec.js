import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iZipAsync } from "./iZipAsync.js";

describe("iZipAsync", () => {
    test("zips multiple async iterables", async () => {
        const result = await iToArrayAsync(
            iZipAsync(
                _createAsyncIterable([1, 2, 3]),
                _createAsyncIterable(["a", "b", "c"]),
                _createAsyncIterable([true, false])
            )
        );
        expect(result).toEqual([
            [1, "a", true],
            [2, "b", false],
            [3, "c", null],
        ]);
    });

    test("handles async iterables of different lengths", async () => {
        const result = await iToArrayAsync(
            iZipAsync(
                _createAsyncIterable([1, 2]),
                _createAsyncIterable(["a", "b", "c"]),
                _createAsyncIterable([true])
            )
        );
        expect(result).toEqual([
            [1, "a", true],
            [2, "b", null],
        ]);
    });

    test("returns empty iterable for empty input", async () => {
        const result = await iToArrayAsync(iZipAsync());
        expect(result).toEqual([]);
    });
});
