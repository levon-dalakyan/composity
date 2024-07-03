import { _curry2 } from "./_curry2";
import { _curry1 } from "../_curry1";
import { _isPlaceholder } from "../_isPlaceholder";
import _p_ from "../../public/_p_/_p_";

describe("_curry2", () => {
    it("should return a function if no arguments are provided", () => {
        const curriedFn = _curry2((a: number, b: number) => a + b);
        const result = curriedFn();
        expect(typeof result).toBe("function");
    });

    it("should return itself when called with a placeholder", () => {
        const curriedFn = _curry2((a: number, b: number) => a + b);
        const result = curriedFn(_p_);
        expect(result).toBe(curriedFn);
    });

    it("should correctly curry the provided function when called with one argument", () => {
        const curriedFn = _curry2((a: number, b: number) => a + b);
        const result = curriedFn(5);
        expect(typeof result).toBe("function");
        expect(result(3)).toBe(8);
    });

    it("should correctly curry the provided function when called with two arguments, one being a placeholder", () => {
        const curriedFn = _curry2((a: number, b: number) => a + b);
        const result = curriedFn(_p_, 4);
        expect(typeof result).toBe("function");
        expect(result(3)).toBe(7);
    });
});
