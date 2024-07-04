import { _curry1 } from "./_curry1";
import { _isPlaceholder } from "../_isPlaceholder";
import _p_ from "../../public/_p_/_p_";

describe("_curry1", () => {
    it("should return a function if no arguments are provided", () => {
        const fn = _curry1((arg: number) => arg);
        expect(typeof fn()).toBe("function");
    });

    it("should invoke the original function with the provided argument", () => {
        const mockedFn = jest.fn();
        const fn = _curry1(mockedFn);
        fn(42);
        expect(mockedFn).toHaveBeenCalledWith(42);
    });

    it("should return the curried function when called with no arguments or a placeholder", () => {
        const fn = _curry1((arg: number) => arg);
        expect(fn()).toBe(fn);
        expect(fn(_p_)).toBe(fn);
    });
});
