import { _createAsyncIterable } from "../../utils";
import { iReduceAsync } from "./iReduceAsync.js";

describe("iReduceAsync", () => {
    test("reduces iterable with initial value", async () => {
        const sum = (acc, val) => acc + val;
        const result = await iReduceAsync(
            sum,
            0
        )(_createAsyncIterable([1, 2, 3, 4]));
        expect(result).toBe(10);
    });

    test("reduces iterable without initial value", async () => {
        const sum = (acc, val) => acc + val;
        const result = await iReduceAsync(sum)(
            _createAsyncIterable([1, 2, 3, 4])
        );
        expect(result).toBe(10);
    });

    test("returns initial value for empty iterable", async () => {
        const sum = (acc, val) => acc + val;
        const result = await iReduceAsync(sum, 0)(_createAsyncIterable([]));
        expect(result).toBe(0);
    });
});
