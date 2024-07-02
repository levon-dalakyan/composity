import { curryN } from "./curryN";
import _p_ from "../_p_/_p_";

describe("curryN function", () => {
    it("should return a function", () => {
        const curriedFn = curryN(2, (a: number, b: number) => a + b);
        expect(typeof curriedFn).toBe("function");
    });

    it("should curry the function with the specified number of arguments", () => {
        const mockFn = jest.fn((a: number, b: number, c: number) => a + b + c);
        const curriedFn = curryN(3, mockFn);

        const result = curriedFn(1)(2)(3);
        expect(result).toBe(6);
    });

    it("should curry the function with placeholders", () => {
        const mockFn = jest.fn((a: number, b: number, c: number) => a + b + c);
        const curriedFn = curryN(3, mockFn);

        const result = curriedFn(1, _p_, 3)(2);
        expect(result).toBe(6);
    });
});
