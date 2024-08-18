import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iSkipAsync } from "./iSkipAsync";

describe("iSkipAsync", () => {
    test("skips specified number of elements", async () => {
        const result = await iToArrayAsync(
            iSkipAsync(2)(_createAsyncIterable([1, 2, 3, 4, 5]))
        );
        expect(result).toEqual([3, 4, 5]);
    });

    test("returns empty iterable when skipping more than available", async () => {
        const result = await iToArrayAsync(
            iSkipAsync(10)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([]);
    });

    test("skips one element by default", async () => {
        const result = await iToArrayAsync(
            iSkipAsync()(_createAsyncIterable([1, 2, 3, 4, 5]))
        );
        expect(result).toEqual([2, 3, 4, 5]);
    });
});
