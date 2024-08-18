import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iMapAsync } from "./iMapAsync";

describe("iMapAsync", () => {
    test("applies function to each element", async () => {
        const double = (x) => x * 2;
        const result = await iToArrayAsync(
            iMapAsync(double)(_createAsyncIterable([1, 2, 3]))
        );
        expect(result).toEqual([2, 4, 6]);
    });

    test("works with empty iterable", async () => {
        const double = (x) => x * 2;
        const result = await iToArrayAsync(
            iMapAsync(double)(_createAsyncIterable([]))
        );
        expect(result).toEqual([]);
    });
});
