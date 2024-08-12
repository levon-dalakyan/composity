import { partial } from "./partial";

describe("partial", () => {
    test("should partially apply a function", () => {
        const greet = (greeting, name) => `${greeting}, ${name}!`;
        const sayHello = partial(greet, "Hello");
        expect(sayHello("World")).toBe("Hello, World!");
    });

    test("should work with multiple arguments", () => {
        const add3 = (a, b, c) => a + b + c;
        const add5 = partial(add3, 2, 3);
        expect(add5(4)).toBe(9);
    });
});
