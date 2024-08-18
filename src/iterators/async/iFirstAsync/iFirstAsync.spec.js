import { _createAsyncIterable } from "../../utils";
import { iFirstAsync } from "./iFirstAsync";

describe("iFirstAsync", () => {
    test("returns first element of async iterable", async () => {
        const result = await iFirstAsync(_createAsyncIterable([1, 2, 3]));
        expect(result).toBe(1);
    });

    test("returns undefined for empty async iterable", async () => {
        const result = await iFirstAsync(_createAsyncIterable([]));
        expect(result).toBeUndefined();
    });
});
