import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iReverseAsync } from "./iReverseAsync";

describe("iReverseAsync", () => {
    test("reverses the order of elements in a non-empty async iterable", async () => {
        const input = _createAsyncIterable([1, 2, 3, 4, 5]);
        const reversed = iReverseAsync(input);
        const result = await iToArrayAsync(reversed);
        expect(result).toEqual([5, 4, 3, 2, 1]);
    });

    test("returns an empty async iterable when given an empty async iterable", async () => {
        const input = _createAsyncIterable([]);
        const reversed = iReverseAsync(input);
        const result = await iToArrayAsync(reversed);
        expect(result).toEqual([]);
    });

    test("works with async iterables containing different data types", async () => {
        const input = _createAsyncIterable([1, "two", { three: 3 }, [4]]);
        const reversed = iReverseAsync(input);
        const result = await iToArrayAsync(reversed);
        expect(result).toEqual([[4], { three: 3 }, "two", 1]);
    });
});
