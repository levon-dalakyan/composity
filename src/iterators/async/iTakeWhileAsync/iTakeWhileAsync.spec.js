import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iTakeWhileAsync } from "./iTakeWhileAsync";

describe("iTakeWhileAsync", () => {
    test("takes elements while predicate is true", async () => {
        const isLessThan3 = (x) => x < 3;
        const result = await iToArrayAsync(
            iTakeWhileAsync(isLessThan3)(
                _createAsyncIterable([1, 2, 3, 4, 1, 2])
            )
        );
        expect(result).toEqual([1, 2]);
    });

    test("takes all elements if predicate is always true", async () => {
        const alwaysTrue = () => true;
        const result = await iToArrayAsync(
            iTakeWhileAsync(alwaysTrue)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable if predicate is always false", async () => {
        const alwaysFalse = () => false;
        const result = await iToArrayAsync(
            iTakeWhileAsync(alwaysFalse)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([]);
    });
});
