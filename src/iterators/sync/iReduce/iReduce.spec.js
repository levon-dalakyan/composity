import { iReduce } from "./iReduce";

describe("iReduce", () => {
    test("reduces iterable with initial value", () => {
        const sum = (acc, val) => acc + val;
        const result = iReduce(sum, 0)([1, 2, 3, 4]);
        expect(result).toBe(10);
    });

    test("reduces iterable without initial value", () => {
        const sum = (acc, val) => acc + val;
        const result = iReduce(sum)([1, 2, 3, 4]);
        expect(result).toBe(10);
    });

    test("returns initial value for empty iterable", () => {
        const sum = (acc, val) => acc + val;
        const result = iReduce(sum, 0)([]);
        expect(result).toBe(0);
    });
});
