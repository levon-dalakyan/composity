import { _createAsyncIterable } from "../../utils";
import { iMinAsync } from "./iMinAsync";

describe("iMinAsync", () => {
    test("finds minimum value in iterable", async () => {
        const result = await iMinAsync(_createAsyncIterable([5, 3, 9, 1, 2]));
        expect(result).toBe(1);
    });

    test("returns Infinity for empty iterable", async () => {
        const result = await iMinAsync(_createAsyncIterable([]));
        expect(result).toBe(Infinity);
    });
});
