# Composity

-   [Motivation](#motivation)
-   [Ideology](#ideology)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Documentation](#documentation)
-   [Examples](#examples)

Composity is a library for composing functions in JavaScript. It gives a possibility to compose classical functional programming methods, fantasy-land containers, iterators (sync or async) and lenses.

## Motivation

In the world of functional programming, composition is a powerful concept that allows developers to build complex operations from simpler ones. However, in JavaScript, composing different types of functions and data structures can often be cumbersome and inconsistent.
Composity aims to solve this problem by providing a unified and intuitive way to compose various elements:

### Functional Programming Methods

Easily chain and combine pure functions for cleaner, more maintainable code.

```js
const sentences = [
    "Hello world",
    "Functional programming is fun",
    "Composity makes it easy",
];

const processStrings = pipe(
    map((s) => s.toLowerCase()),
    map((s) => s.split(" ")),
    map((words) => words.reverse()),
    map((words) => words.join(" ")),
    reverse,
    head
);

console.log(processStrings(sentences)); // Output: 'easy it makes composity'
```

### Functional Programming Containers

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
    name: "ComposityCorp",
    departments: [
        {
            name: "Engineering",
            teams: [
                {
                    name: "Frontend",
                    lead: {
                        name: "Levon",
                        contact: {
                            email: "composity@corp.com",
                            phone: "1234567890",
                        },
                    },
                    members: 10,
                },
                {
                    name: "Backend",
                    lead: {
                        name: "Bob",
                        contact: {
                            email: "composity1@corp.com",
                            phone: "0987654321",
                        },
                    },
                    members: 8,
                },
            ],
        },
    ],
};

const firstTeamLeadEmailLens = lCompose(
    lCompose(lProp("departments"), lIndex(0)),
    lCompose(lProp("teams"), lIndex(0)),
    lProp("lead"),
    lProp("contact"),
    lProp("email")
);

console.log(lView(firstTeamLeadEmailLens, company)); // Output: "composity@corp.com"
```

## Ideology

Composity is built on the following core principles:

-   **Unified Composition**: Composity aims to provide a single and consistent approach to composing functions and data structures. Whether you're working with pure functions, fp-containers, iterators or lenses, Composity offers a unified interface for composition.

-   **Flexibility**: Composity is designed to be flexible, allowing you to compose various elements in ways that best suits your needs. The flexibility extends from simple function composition to complex operations on nested data structures.

-   **Functional Purity**: Composity encourages the use of pure functions and immutable data structures, aligning with functional programming principles. This leads to more predictable, testable, and maintainable code.

-   **Lazy Evaluation**: By supporting composition with iterators and generators, Composity enables lazy evaluation of potentially infinite data streams, allowing for efficient processing of large datasets.

-   **Abstraction of Complexity**: While the underlying implementation may be complex, Composity aims to provide simple, intuitive interface. This abstraction allows developers to focus on solving problems rather than wrestling with implementation details.

## Installation

Composity can be installed using NPM:

```zsh
npm install composity
```

or Yarn:

```zsh
yarn add composity
```

## Usage

### CommonJS

```js
const Composity = require("composity");

const { reverse, Lazy, iReverse, iMapAsync } = Composity;

const { filter, Either, iFilter, iComposeAsync, lOver } = require("composity");
```

or import from the specific parts:

```js
const { reverse, Lazy } = require("composity/fp");
const { filter } = require("composity/fp/methods");
const { Either } = require("composity/fp/containers");

const { iReverse, iComposeAsync } = require("composity/iterators");
const { iFilter } = require("composity/iterators/sync");
const { iMapAsync } = require("composity/iterators/async");

const { lOver } = require("composity/lenses");
```

### ESM

```js
import * as Composity from "composity";

const { reverse, Lazy, iReverse, iMapAsync } = Composity;

import { filter, Either, iFilter, iComposeAsync, lOver } from "composity";
```

or import from the specific parts:

```js
import { reverse, Lazy } from "composity/fp";
import { filter } from "composity/fp/methods";
import { Either } from "composity/fp/containers";

import { iReverse, iComposeAsync } from "composity/iterators";
import { iFilter } from "composity/iterators/sync";
import { iMapAsync } from "composity/iterators/async";

import { lOver } from "composity/lenses";
```

## Documentation

-   [Functional Programming Methods](./docs/fp-methods.md)
-   [Functional Programming Containers](./docs/fp-containers.md)
-   [Iterators Sync](./docs/iterators-sync.md)
-   [Iterators Async](./docs/iterators-async.md)
-   [Lenses](./docs/lenses.md)

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
} from "composity/fp/methods";

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
            products
        ),
        totalDiscounted: reduce(
            (sum, product) => sum + product.discountedPrice,
            0,
            products
        ),
        hasExpensiveItem: hasExpensiveItem(products),
    })
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
import { IO, Lazy, Reader } from "composity/fp/containers";

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
                        return new IO(() =>
                            expensiveOperation.evaluate()
                        ).chain((result) =>
                            log(
                                `Admin ${user.name} processed with result: ${result}`
                            )
                        );
                    } else {
                        return log(`User ${user.name} processed`);
                    }
                })
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

Output enumerated product names in reverse order.

```js
import {
    iMap,
    iEnumerate,
    iPipe,
    iReverse,
    iJoin,
} from "composity/iterators/sync";

const products = [
    { name: "Apple", category: "Fruit", price: 0.5, quantity: 100 },
    { name: "Banana", category: "Fruit", price: 0.3, quantity: 150 },
    { name: "Carrot", category: "Vegetable", price: 0.4, quantity: 80 },
    { name: "Date", category: "Fruit", price: 1.2, quantity: 40 },
    { name: "Eggplant", category: "Vegetable", price: 0.8, quantity: 60 },
];

const reversedNumberedList = iPipe(
    iMap((product) => product.name),
    iReverse,
    iEnumerate,
    iMap(([index, name]) => `${index + 1}. ${name}`),
    iJoin("\n")
);

console.log("Reversed, numbered list of products:");
console.log(...reversedNumberedList(products));

/*
Output:

Reversed, numbered list of products:
 1 .   E g g p l a n t 
 2 .   D a t e 
 3 .   C a r r o t 
 4 .   B a n a n a 
 5 .   A p p l e
*/
```

### Iterators (Async)

Output enumerated product names from an async collection in reverse order.

```js
import {
    iMapAsync,
    iEnumerateAsync,
    iPipeAsync,
    iReverseAsync,
} from "composity/iterators/async";

function createAsyncIterable(array) {
    return {
        [Symbol.asyncIterator]() {
            let i = 0;
            return {
                async next() {
                    if (i < array.length) {
                        return { value: array[i++], done: false };
                    }
                    return { value: undefined, done: true };
                },
            };
        },
    };
}

const products = [
    { name: "Apple", category: "Fruit", price: 0.5, quantity: 100 },
    { name: "Banana", category: "Fruit", price: 0.3, quantity: 150 },
    { name: "Carrot", category: "Vegetable", price: 0.4, quantity: 80 },
    { name: "Date", category: "Fruit", price: 1.2, quantity: 40 },
    { name: "Eggplant", category: "Vegetable", price: 0.8, quantity: 60 },
];
const asyncProducts = createAsyncIterable(products);

(async () => {
    const reversedNumberedList = iPipeAsync(
        iMapAsync((product) => product.name),
        iReverseAsync,
        iEnumerateAsync,
        iMapAsync(([index, name]) => `${index + 1}. ${name}`)
    );
    const list = reversedNumberedList(asyncProducts);

    console.log("Reversed, numbered list of products:");

    for await (const item of list) {
        console.log(item);
    }
})();

/*
Output:

Reversed, numbered list of products:
1. Eggplant
2. Date
3. Carrot
4. Banana
5. Apple
*/
```

### Lenses

Work with complex, nested data structures.

```js
import {
    lCompose,
    lProp,
    lIndex,
    lView,
    lSet,
    lPath,
    lOver,
    lSetPath,
    lGetPath,
    lModifyPath,
} from "composity/lenses";

// Data structure
const company = {
    name: "TechCorp",
    departments: [
        {
            name: "Engineering",
            employees: [
                {
                    id: 1,
                    name: "Alice",
                    role: "Software Engineer",
                    skills: ["JavaScript", "React", "Node.js"],
                },
                {
                    id: 2,
                    name: "Bob",
                    role: "DevOps Engineer",
                    skills: ["Docker", "Kubernetes", "AWS"],
                },
            ],
        },
        {
            name: "Marketing",
            employees: [
                {
                    id: 3,
                    name: "Charlie",
                    role: "Marketing Manager",
                    skills: ["SEO", "Content Marketing", "Analytics"],
                },
            ],
        },
    ],
};

// Example 1: Composing lenses to access nested data
const engineeringLens = lCompose(lProp("departments"), lIndex(0));
const firstEngineerLens = lCompose(
    engineeringLens,
    lProp("employees"),
    lIndex(0)
);
const firstEngineerNameLens = lCompose(firstEngineerLens, lProp("name"));

console.log(lView(firstEngineerNameLens, company)); // Output: 'Alice'

// Example 2: Modifying nested data
const updatedCompany = lSet(firstEngineerNameLens, "Alicia", company);
console.log(lView(firstEngineerNameLens, updatedCompany)); // Output: 'Alicia'

// Example 3: Using lPath for deep access
const marketingManagerSkillsLens = lPath(
    "departments",
    1,
    "employees",
    0,
    "skills"
);
console.log(lView(marketingManagerSkillsLens, company)); // Output: ['SEO', 'Content Marketing', 'Analytics']

// Example 4: Using lOver to modify data
const addSkill = (skill) => (skills) => [...skills, skill];
const updatedCompanyWithNewSkill = lOver(
    marketingManagerSkillsLens,
    addSkill("Social Media Marketing"),
    company
);
console.log(lView(marketingManagerSkillsLens, updatedCompanyWithNewSkill));
// Output: ['SEO', 'Content Marketing', 'Analytics', 'Social Media Marketing']

// Example 5: Using lGetPath and lSetPath for flexible access
const bobsRole = lGetPath(company, ["departments", 0, "employees", 1, "role"]);
console.log(bobsRole); // Output: 'DevOps Engineer'

const updatedCompanyWithNewRole = lSetPath(
    company,
    ["departments", 0, "employees", 1, "role"],
    "Senior DevOps Engineer"
);
console.log(
    lGetPath(updatedCompanyWithNewRole, [
        "departments",
        0,
        "employees",
        1,
        "role",
    ])
);
// Output: 'Senior DevOps Engineer'

// Example 6: Using lModifyPath to update nested data
const capitalizeRole = (role) => role.toUpperCase();
const updatedCompanyWithCapitalizedRole = lModifyPath(
    company,
    ["departments", 1, "employees", 0, "role"],
    capitalizeRole
);
console.log(
    lGetPath(updatedCompanyWithCapitalizedRole, [
        "departments",
        1,
        "employees",
        0,
        "role",
    ])
);
// Output: 'MARKETING MANAGER'
```
