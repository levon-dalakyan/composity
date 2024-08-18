import { _createAsyncIterable } from "../../utils";
import { iFindAsync } from "./iFindAsync";

describe("iFindAsync", () => {
    test("finds first element matching predicate", async () => {
        const isEven = (x) => x % 2 === 0;
        const result = await iFindAsync(isEven)(
            _createAsyncIterable([1, 2, 3, 4, 5])
        );
        expect(result).toBe(2);
    });

    test("returns undefined when no element matches", async () => {
        const isNegative = (x) => x < 0;
        const result = await iFindAsync(isNegative)(
            _createAsyncIterable([1, 2, 3])
        );
        expect(result).toBeUndefined();
    });
});
