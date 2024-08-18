import { _createAsyncIterable } from "../../utils";
import { iToArrayAsync } from "../iToArrayAsync";
import { iEnumerateAsync } from "./iEnumerateAsync";

describe("iEnumerateAsync", () => {
    test("enumerates elements with index", async () => {
        const result = await iToArrayAsync(
            iEnumerateAsync(_createAsyncIterable(["a", "b", "c"]))
        );
        expect(result).toEqual([
            [0, "a"],
            [1, "b"],
            [2, "c"],
        ]);
    });

    test("works with empty async iterable", async () => {
        const result = await iToArrayAsync(
            iEnumerateAsync(_createAsyncIterable([]))
        );
        expect(result).toEqual([]);
    });
});
