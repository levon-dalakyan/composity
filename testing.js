import { Maybe, filter, map, compose, List } from "./dist/index.js";

const safeDivide = (a, b) => (b === 0 ? Maybe.None() : Maybe.Some(a / b));

const processNumbers = compose(
    (list) => new List(list),
    map((maybe) => maybe._value),
    filter((maybe) => maybe.isSome()),
    map((n) => safeDivide(10, n))
);

const numbers = [2, 0, 5, 4, 0];
console.log(processNumbers(numbers).toString());
// Output: List(5,2,2.5)
