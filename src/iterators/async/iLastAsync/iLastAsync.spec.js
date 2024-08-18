import { _createAsyncIterable } from "../../utils";
import { iLastAsync } from "./iLastAsync";

describe("iLastAsync", () => {
    test("returns last element of non-empty async iterable", async () => {
        const result = await iLastAsync(_createAsyncIterable([1, 2, 3]));
        expect(result).toBe(3);
    });

    test("returns undefined for empty async iterable", async () => {
        const result = await iLastAsync(_createAsyncIterable([]));
        expect(result).toBeUndefined();
    });
});
