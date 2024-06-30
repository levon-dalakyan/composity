import _p_ from "../../public/_p_/_p_";
import { _curry1 } from "./_curry1";

describe("_curry1", () => {
    it("should return a function if no arguments are provided", () => {
        const fn = _curry1(() => {});
        expect(typeof fn).toBe("function");
    });

    it("should return a function if a placeholder is provided", () => {
        const fn = _curry1(() => {});
        const curried = fn(_p_);
        expect(typeof curried).toBe("function");
    });

    it("should call the function with the provided argument", () => {
        const mockFn = jest.fn();
        const fn = _curry1(mockFn);
        fn(1);
        expect(mockFn).toHaveBeenCalledWith(1);
    });

    it("should preserve the context of the function", () => {
        const context = { foo: "bar" };
        const mockFn = jest.fn();
        const fn = _curry1(mockFn);
        fn.call(context, 1);
        expect(mockFn).toHaveBeenCalledWith(1);
        expect(mockFn.mock.instances[0]).toBe(context);
    });
});
