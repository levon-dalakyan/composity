import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iFilterAsync } from "./iFilterAsync";

describe("iFilterAsync", () => {
    test("filters elements based on predicate", async () => {
        const isEven = (x) => x % 2 === 0;
        const result = await iToArrayAsync(
            iFilterAsync(isEven)(_createAsyncIterable([1, 2, 3, 4, 5]))
        );
        expect(result).toEqual([2, 4]);
    });

    test("returns empty iterable when no elements match", async () => {
        const isNegative = (x) => x < 0;
        const result = await iToArrayAsync(
            iFilterAsync(isNegative)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([]);
    });
});
