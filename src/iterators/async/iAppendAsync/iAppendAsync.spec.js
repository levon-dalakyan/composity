import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iAppendAsync } from "./iAppendAsync";

describe("iAppendAsync", () => {
    test("appends multiple async iterables", async () => {
        const result = iAppendAsync(
            _createAsyncIterable([4, 5]),
            _createAsyncIterable([6])
        )(_createAsyncIterable([1, 2, 3]));
        expect(await iToArrayAsync(result)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("works with empty async iterables", async () => {
        const result = iAppendAsync(
            _createAsyncIterable([]),
            _createAsyncIterable([])
        )(_createAsyncIterable([]));
        expect(await iToArrayAsync(result)).toEqual([]);
    });
});
