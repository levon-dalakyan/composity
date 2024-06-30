import _p_ from "../../public/_p_/_p_";
import { _curry3 } from "./_curry3";

describe("_curry3", () => {
    it("should return a function if no arguments are provided", () => {
        const fn = _curry3(() => {});
        expect(typeof fn).toBe("function");
    });

    it("should curry the function with one argument", () => {
        const mockFn = jest.fn();
        const fn = _curry3(mockFn);
        const curried = fn(1);
        curried(2, 3);
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });

    it("should curry the function with two arguments", () => {
        const mockFn = jest.fn();
        const fn = _curry3(mockFn);
        const curried = fn(1, 2);
        curried(3);
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });

    it("should curry the function with three arguments", () => {
        const mockFn = jest.fn();
        const fn = _curry3(mockFn);
        fn(1, 2, 3);
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });

    it("should curry the function with multiple placeholders", () => {
        const mockFn = jest.fn();
        const fn = _curry3(mockFn);
        const curried = fn(_p_, _p_, _p_);
        curried(1, 2, 3);
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });

    it("should curry the function with some arguments", () => {
        const mockFn = jest.fn();
        const fn = _curry3(mockFn);
        const curried = fn(1, _p_, 3);
        curried(2);
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });
});
