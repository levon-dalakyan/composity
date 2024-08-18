import { _createAsyncIterable } from "../../utils";
import { iAverageAsync } from "./iAverageAsync";

describe("iAverageAsync", () => {
    test("calculates average of async iterable", async () => {
        const result = await iAverageAsync(
            _createAsyncIterable([1, 2, 3, 4, 5])
        );
        expect(result).toBe(3);
    });

    test("returns 0 for empty async iterable", async () => {
        const result = await iAverageAsync(_createAsyncIterable([]));
        expect(result).toBe(0);
    });
});
