# Composize

Composize is a library for composing functions in JavaScript. It gives a possibility to compose classical functional programming methods, fantasy-land containers, iterators (sync or async) and lenses.

## Motivation

In the world of functional programming, composition is a powerful concept that allows developers to build complex operations from simpler ones. However, in JavaScript, composing different types of functions and data structures can often be cumbersome and inconsistent.
Composize aims to solve this problem by providing a unified and intuitive way to compose various elements:

### Functional Programming Methods

Easily chain and combine pure functions for cleaner, more maintainable code.

```js
const sentences = ['Hello world', 'Functional programming is fun', 'Composize makes it easy'];

const processStrings = pipe(
  map(s => s.toLowerCase()),
  map(s => s.split(' ')),
  map(words => words.reverse()),
  map(words => words.join(' ')),
  reverse,
  head
);

console.log(processStrings(sentences)); // Output: 'easy it makes composize'
```

### Fantasy-land Containers

Seamlessly work with monads, functors, and other algebraic structures without breaking the flow of your composition.

```js
const safeDivide = (a, b) => (b === 0 ? Maybe.None() : Maybe.Some(a / b));

const processNumbers = compose(
    (list) => new List(list),
    map((maybe) => maybe._value),
    filter((maybe) => maybe.isSome()),
    map((n) => safeDivide(10, n))
);

const numbers = [2, 0, 5, 4, 0];
console.log(processNumbers(numbers).toString()); // Output: List(5,2,2.5)
```

### Iterators 

Compose operations on iterables and generators, enabling efficient processing of large or infinite data streams, synchronously or asynchronously.

```js
// sync
const numbers = function* () {
    let i = 1;
    while (true) yield i++;
};

const getTenEvenDoubled = iCompose(
    iTake(10),
    iMap((x) => x * 2),
    iFilter((x) => x % 2 === 0),
    iSlice(0, 100)
);

const iterator = getTenEvenDoubled(numbers());

console.log(...iterator); // Output: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40
```

```js
// async
const numbers = async function* () {
    let i = 1;
    while (true) yield i++;
};

const getTenEvenDoubled = iComposeAsync(
    iTakeAsync(10),
    iMapAsync((x) => x * 2),
    iFilterAsync((x) => x % 2 === 0),
    iSliceAsync(0, 100)
);

const iterator = getTenEvenDoubled(numbers());

for await (const x of iterator) {
    console.log(x);
}
// Output: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40
```

### Lenses

Focus on a specific part of a larger data structure in a composable way.

```js
const company = {
  name: "ComposizeCorp",
  departments: [
    {
      name: "Engineering",
      teams: [
        {
          name: "Frontend",
          lead: {
            name: "Levon",
            contact: {
              email: "composize@corp.com",
              phone: "1234567890"
            }
          },
          members: 10
        },
        {
          name: "Backend",
          lead: {
            name: "Bob",
            contact: {
              email: "composize1@corp.com",
              phone: "0987654321"
            }
          },
          members: 8
        }
      ]
    }
  ]
};

const firstTeamLeadEmailLens = lCompose(
  lCompose(lProp("departments"), lIndex(0)),
  lCompose(lProp("teams"), lIndex(0)),
  lProp("lead"),
  lProp("contact"),
  lProp("email")
);

console.log(lView(firstTeamLeadEmailLens, company)); // Output: "composize@corp.com"
```



