import { _createAsyncIterable } from "../../utils";
import { iJoinAsync } from "./iJoinAsync";

describe("iJoinAsync", () => {
    test("joins elements with default separator", async () => {
        const result = await iJoinAsync()(
            _createAsyncIterable(["a", "b", "c"])
        );
        expect(result).toBe("abc");
    });

    test("joins elements with custom separator", async () => {
        const result = await iJoinAsync(", ")(
            _createAsyncIterable(["a", "b", "c"])
        );
        expect(result).toBe("a, b, c");
    });

    test("returns empty string for empty async iterable", async () => {
        const result = await iJoinAsync()(_createAsyncIterable([]));
        expect(result).toBe("");
    });
});
