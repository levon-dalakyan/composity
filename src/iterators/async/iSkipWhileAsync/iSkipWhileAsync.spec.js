import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iSkipWhileAsync } from "./iSkipWhileAsync";

describe("iSkipWhileAsync", () => {
    test("skips elements while predicate is true", async () => {
        const isLessThan3 = (x) => x < 3;
        const result = await iToArrayAsync(
            iSkipWhileAsync(isLessThan3)(
                _createAsyncIterable([1, 2, 3, 4, 2, 1])
            )
        );
        expect(result).toEqual([3, 4, 2, 1]);
    });

    test("returns all elements if predicate is always false", async () => {
        const alwaysFalse = () => false;
        const result = await iToArrayAsync(
            iSkipWhileAsync(alwaysFalse)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable if predicate is always true", async () => {
        const alwaysTrue = () => true;
        const result = await iToArrayAsync(
            iSkipWhileAsync(alwaysTrue)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([]);
    });
});
