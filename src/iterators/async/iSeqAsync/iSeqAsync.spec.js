import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iSeqAsync } from "./iSeqAsync";

describe("iSeqAsync", () => {
    test("concatenates multiple iterables", async () => {
        const result = await iToArrayAsync(
            iSeqAsync(
                _createAsyncIterable([1, 2]),
                _createAsyncIterable([3, 4]),
                _createAsyncIterable([5, 6])
            )
        );
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("works with empty iterables", async () => {
        const result = await iToArrayAsync(
            iSeqAsync(
                _createAsyncIterable([]),
                _createAsyncIterable([]),
                _createAsyncIterable([])
            )
        );
        expect(result).toEqual([]);
    });

    test("skips empty iterables", async () => {
        const result = await iToArrayAsync(
            iSeqAsync(
                _createAsyncIterable([1, 2]),
                _createAsyncIterable([]),
                _createAsyncIterable([3, 4]),
                _createAsyncIterable([]),
                _createAsyncIterable([5, 6])
            )
        );
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
