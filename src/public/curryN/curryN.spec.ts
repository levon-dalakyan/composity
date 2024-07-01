import { curryN } from "./curryN";

describe("curryN", () => {
    it("should return a function if no arguments are provided", () => {
        const fn = curryN(2, (a: number, b: number) => a + b);
        expect(typeof fn).toBe("function");
    });

    it("should return a function that can be partially applied", () => {
        const fn = curryN(2, (a: number, b: number) => a + b);
        const curried = fn(1);
        expect(typeof curried).toBe("function");
    });

    it("should return a function that can be fully applied", () => {
        const fn = curryN(2, (a: number, b: number) => a + b);
        const result = fn(1, 2);
        expect(result).toBe(3);
    });

    it("should return a function that can be partially applied and fully applied", () => {
        const fn = curryN(3, (a: number, b: number, c: number) => a + b + c);
        const curried = fn(1);
        const result = curried(2, 3);
        expect(result).toBe(6);
    });

    it("should preserve the context of the function", () => {
        const context = { foo: "bar" };
        const fn = curryN(1, function (this: typeof context) {
            return this.foo;
        });
        const result = fn.call(context);
        expect(result).toBe("bar");
    });
});
