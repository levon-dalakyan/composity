import { _createAsyncIterable } from "../../utils";
import { iProductAsync } from "./iProductAsync";

describe("iProductAsync", () => {
    test("calculates product of iterable", async () => {
        const result = await iProductAsync(_createAsyncIterable([1, 2, 3, 4]));
        expect(result).toBe(24);
    });

    test("returns undefined for empty iterable", async () => {
        const result = await iProductAsync(_createAsyncIterable([]));
        expect(result).toBeUndefined();
    });
});
