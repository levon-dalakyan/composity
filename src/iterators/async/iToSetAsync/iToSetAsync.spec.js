import { _createAsyncIterable } from "../../utils";
import { iToSetAsync } from "./iToSetAsync";

describe("iToSetAsync", () => {
    test("converts async iterable to set", async () => {
        const result = await iToSetAsync(
            _createAsyncIterable([1, 2, 2, 3, 3, 3])
        );
        expect(result).toEqual(new Set([1, 2, 3]));
    });

    test("works with empty async iterable", async () => {
        const result = await iToSetAsync(_createAsyncIterable([]));
        expect(result).toEqual(new Set());
    });
});
