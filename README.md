# Composize

- [Motivation](#motivation)
- [Ideology](#ideology)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Examples](#examples)

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

## Ideology

Composize is built on the following core principles:

- **Unified Composition**: Composize aims to provide a single and consistent approach to composing functions and data structures. Whether you're working with pure functions, fp-containers, iterators or lenses, Composize offers a unified interface for composition.

- **Flexibility**: Composize is designed to be flexible, allowing you to compose various elements in ways that best suits your needs. The flexibility extends from simple function composition to complex operations on nested data structures.

- **Functional Purity**: Composize encourages the use of pure functions and immutable data structures, aligning with functional programming principles. This leads to more predictable, testable, and maintainable code.

- **Lazy Evaluation**: By supporting composition with iterators and generators, Composize enables lazy evaluation of potentially infinite data streams, allowing for efficient processing of large datasets.

- **Abstraction of Complexity**: While the underlying implementation may be complex, Composize aims to provide simple, intuitive interface. This abstraction allows developers to focus on solving problems rather than wrestling with implementation details.

## Installation

Composize can be installed using NPM:

```zsh
npm install composize
```

or Yarn:

```zsh
yarn add composize
```

## Usage

### CommonJS

```js
const Composize = require("composize");

const { reverse, Lazy, iReverse, iMapAsync } = Composize;

const { filter, Either, iFilter, iComposeAsync, lOver } = require("composize");
```

or import from the specific parts:

```js
const { reverse, Lazy } = require("composize/fp");
const { filter } = require("composize/fp/methods");
const { Either } = require("composize/fp/containers");

const { iReverse, iComposeAsync } = require("composize/iterators");
const { iFilter } = require("composize/iterators/sync");
const { iMapAsync } = require("composize/iterators/async");

const { lOver } = require("composize/lenses");
```

### ESM

```js
import * as Composize from "composize";

const { reverse, Lazy, iReverse, iMapAsync } = Composize;

import { filter, Either, iFilter, iComposeAsync, lOver } from "composize";
```

or import from the specific parts:

```js
import { reverse, Lazy } from "composize/fp";
import { filter } from "composize/fp/methods";
import { Either } from "composize/fp/containers";

import { iReverse, iComposeAsync } from "composize/iterators";
import { iFilter } from "composize/iterators/sync";
import { iMapAsync } from "composize/iterators/async";

import { lOver } from "composize/lenses";
```

## Documentation

- [Functional Programming Methods](./docs/fp-methods.md)
- [Fantasy-land Containers](./docs/fp-containers.md)
- [Iterators Sync](./docs/iterators-sync.md)
- [Iterators Async](./docs/iterators-async.md)
- [Lenses](./docs/lenses.md)

## Examples

### Functional Programming Methods

Process a list of products, apply discounts, filter out unavailable items, and generate a summary report.

```js
import {
  curry,
  filter,
  map,
  reduce,
  pipe,
  prop,
  some,
  memoize,
  mergeAll,
} from "composize/fp/methods";

// Sample data
const products = [
  { id: 1, name: "Laptop", price: 1000, available: true },
  { id: 2, name: "Smartphone", price: 500, available: true },
  { id: 3, name: "Tablet", price: 300, available: false },
  { id: 4, name: "Headphones", price: 100, available: true },
  { id: 5, name: "Monitor", price: 200, available: true },
];

// Helper functions
const isAvailable = prop("available");
const getPrice = prop("price");

// Memoized discount calculator
const calculateDiscount = memoize((price) => {
  console.log("Calculating discount for", price);
  return price > 500 ? 0.1 : 0.05;
});

// Curried function to apply discount
const applyDiscount = curry((discountFn, product) => {
  const discount = discountFn(product.price);
  return mergeAll(product, {
    discountedPrice: product.price * (1 - discount),
    discount: discount * 100,
  });
});

// Function to check if any product is expensive (price > 800)
const hasExpensiveItem = some((product) => getPrice(product) > 800);

// Main processing pipeline
const processProducts = pipe(
  filter(isAvailable),
  map(applyDiscount(calculateDiscount)),
  (products) => ({
    products,
    totalOriginal: reduce(
      (sum, product) => sum + getPrice(product),
      0,
      products,
    ),
    totalDiscounted: reduce(
      (sum, product) => sum + product.discountedPrice,
      0,
      products,
    ),
    hasExpensiveItem: hasExpensiveItem(products),
  }),
);

// Execute the pipeline
const result = processProducts(products);

console.log("Processed Products:");
console.log(JSON.stringify(result, null, 2));

/*
Output:

Calculating discount for 1000
Calculating discount for 500
Calculating discount for 100
Calculating discount for 200
Processed Products:
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 1000,
      "available": true,
      "discountedPrice": 900,
      "discount": 10
    },
    {
      "id": 2,
      "name": "Smartphone",
      "price": 500,
      "available": true,
      "discountedPrice": 475,
      "discount": 5
    },
    {
      "id": 4,
      "name": "Headphones",
      "price": 100,
      "available": true,
      "discountedPrice": 95,
      "discount": 5
    },
    {
      "id": 5,
      "name": "Monitor",
      "price": 200,
      "available": true,
      "discountedPrice": 190,
      "discount": 5
    }
  ],
  "totalOriginal": 1800,
  "totalDiscounted": 1660,
  "hasExpensiveItem": true
}
*/
```

### Functional Programming Containers

A user management system.

```js
import { IO, Lazy, Reader } from "composize/fp/containers";

// Simulating a database
const db = {
  users: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
  ],
};

// IO monad for logging
const log = (message) => new IO(() => console.log(message));

// Lazy monad for expensive computations
const expensiveOperation = new Lazy(() => {
  console.log("Performing expensive operation...");
  return Array(100000000)
    .fill(1)
    .reduce((a, b) => a + b, 0);
});

// Reader monad for accessing the database
const getUser = (id) =>
  new Reader((db) => {
    const user = db.users.find((u) => u.id === id);
    return user || null;
  });

// Combine monads to create a complex operation
const processUser = (userId) => {
  return Reader.ask().chain((env) => {
    return getUser(userId).chain((user) => {
      if (!user) {
        return Reader.of(log(`User ${userId} not found`));
      }

      return Reader.of(
        log(`Processing user: ${user.name}`).chain(() => {
          if (user.role === "admin") {
            return new IO(() => expensiveOperation.evaluate()).chain((result) =>
              log(`Admin ${user.name} processed with result: ${result}`),
            );
          } else {
            return log(`User ${user.name} processed`);
          }
        }),
      );
    });
  });
};

// Usage
function main() {
  console.log("Starting application...");

  // Process an admin user
  processUser(1).runWith(db).run();

  // Process a regular user
  processUser(2).runWith(db).run();

  // Process a non-existent user
  processUser(4).runWith(db).run();

  console.log("Application finished.");
}

main();

/*
Output:

Starting application...
Processing user: Alice
Performing expensive operation...
Admin Alice processed with result: 100000000
Processing user: Bob
User Bob processed
User 4 not found
Application finished.
*/
```

### Iterators (Sync)


