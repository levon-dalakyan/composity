import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "./iToArrayAsync";

describe("iToArrayAsync", () => {
    test("converts async iterable to array", async () => {
        const result = await iToArrayAsync(_createAsyncIterable([1, 2, 3]));
        expect(result).toEqual([1, 2, 3]);
    });

    test("works with empty async iterable", async () => {
        const result = await iToArrayAsync(_createAsyncIterable([]));
        expect(result).toEqual([]);
    });
});
