import { _createAsyncIterable } from "../../utils";
import { iCountAsync } from "./iCountAsync";

describe("iCountAsync", () => {
    test("counts elements in async iterable", async () => {
        const result = await iCountAsync(_createAsyncIterable([1, 2, 3, 4, 5]));
        expect(result).toBe(5);
    });

    test("returns 0 for empty async iterable", async () => {
        const result = await iCountAsync(_createAsyncIterable([]));
        expect(result).toBe(0);
    });
});
