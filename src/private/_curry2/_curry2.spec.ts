import _p_ from "../../public/_p_/_p_";
import { _curry2 } from "./_curry2";

describe("private/_curry2", () => {
    it("should return a function if no arguments are provided", () => {
        const fn = _curry2(() => {});
        expect(typeof fn).toBe("function");
    });

    it("should return a function if a placeholder is provided", () => {
        const fn = _curry2((a) => {});
        const curried = fn(_p_);
        expect(typeof curried).toBe("function");
    });

    it("should call the function with the provided arguments", () => {
        const mockFn = jest.fn();
        const fn = _curry2(mockFn);
        fn(1, 2);
        expect(mockFn).toHaveBeenCalledWith(1, 2);
    });

    it("should preserve the context of the function", () => {
        const context = { foo: "bar" };
        const mockFn = jest.fn();
        const fn = _curry2(mockFn);
        fn.call(context, 1, 2);
        expect(mockFn).toHaveBeenCalledWith(1, 2);
        expect(mockFn.mock.instances[0]).toBe(context);
    });

    it("should curry the function if not all arguments are provided", () => {
        const mockFn = jest.fn();
        const fn = _curry2(mockFn);
        const curried = fn(1);
        curried(2);
        expect(mockFn).toHaveBeenCalledWith(1, 2);
    });

    it("should curry the function with placeholders", () => {
        const mockFn = jest.fn();
        const fn = _curry2(mockFn);
        const curried = fn(_p_, 2);
        curried(1);
        expect(mockFn).toHaveBeenCalledWith(1, 2);
    });

    it("should curry the function with multiple placeholders", () => {
        const mockFn = jest.fn();
        const fn = _curry2(mockFn);
        const curried = fn(_p_, _p_);
        curried(1, 2);
        expect(mockFn).toHaveBeenCalledWith(1, 2);
    });
});
