import { _createAsyncIterable } from "../../utils";
import { iMaxAsync } from "./iMaxAsync";

describe("iMaxAsync", () => {
    test("finds maximum value in iterable", async () => {
        const result = await iMaxAsync(_createAsyncIterable([1, 5, 3, 9, 2]));
        expect(result).toBe(9);
    });

    test("returns -Infinity for empty iterable", async () => {
        const result = await iMaxAsync(_createAsyncIterable([]));
        expect(result).toBe(-Infinity);
    });
});
