import { _reduceByMethod } from "./_reduceByMethod";

describe("_reduceByMethod", () => {
    test("reduces object with reduce method", () => {
        const obj = {
            reduce: (fn, init) => fn(init, 5),
        };
        expect(
            _reduceByMethod("reduce", (acc, val) => acc + val, 10, obj)
        ).toBe(15);
    });
});
