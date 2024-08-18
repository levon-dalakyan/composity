import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iPrependAsync } from "./iPrependAsync";

describe("iPrependAsync", () => {
    test("prepends multiple iterables", async () => {
        const result = await iToArrayAsync(
            iPrependAsync(
                _createAsyncIterable([1, 2]),
                _createAsyncIterable([3, 4])
            )(_createAsyncIterable([5, 6]))
        );
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("works with empty iterables", async () => {
        const result = await iToArrayAsync(
            iPrependAsync(
                _createAsyncIterable([]),
                _createAsyncIterable([])
            )(_createAsyncIterable([]))
        );
        expect(result).toEqual([]);
    });
});
