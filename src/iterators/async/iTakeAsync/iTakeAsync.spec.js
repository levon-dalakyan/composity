import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iTakeAsync } from "./iTakeAsync";

describe("iTakeAsync", () => {
    test("takes specified number of elements", async () => {
        const result = await iToArrayAsync(
            iTakeAsync(3)(_createAsyncIterable([1, 2, 3, 4, 5]))
        );
        expect(result).toEqual([1, 2, 3]);
    });

    test("takes all elements if amount exceeds iterable length", async () => {
        const result = await iToArrayAsync(
            iTakeAsync(10)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([1, 2, 3]);
    });

    test("returns empty iterable when taking 0 elements", async () => {
        const result = await iToArrayAsync(
            iTakeAsync(0)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([]);
    });
});
