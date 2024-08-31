# Functional Programming Containers in Composity

## Introduction

Composity provides a set of functional programming containers that adhere to the Fantasy Land specification. These containers encapsulate values and provide a consistent interface for working with them in a functional manner. They allow you to handle various scenarios such as computations that might fail, side effects, and more, all while maintaining the principles of functional programming.

The containers in Composity are designed to be composable, allowing you to chain operations and combine different containers seamlessly. They provide a powerful toolset for writing clean, maintainable, and robust functional code.

## Table of Contents

1. [Either](#either)
2. [IO](#io)
3. [KeyValueList](#keyvaluelist)
4. [Lazy](#lazy)
5. [List](#list)
6. [Maybe](#maybe)
7. [Reader](#reader)
8. [State](#state)
9. [Task](#task)
10. [UniqueList](#uniquelist)

## Either

The `Either` monad represents a value that can be either a `Right` (success) or `Left` (failure). It is useful for handling computations that might fail and providing more context about the failure.

### Class: Either

**Implements:** Functor, Chain, Apply, Applicative, Bifunctor, Extend, Setoid

**Constructor**

```js
new Either(isRight: boolean, value: any)
```

Creates a new `Either` instance.

-   `isRight`: Indicates if this is a Right value.

-   `value`: The wrapped value.

**Static Methods**

-   `Either.Right(value: any): Either` - Creates a Right Either.

-   `Either.Left(value: any): Either` - Creates a Left Either.

-   `Either.of(value: any): Either` - Creates a Right Either (Applicative of).

**Instance Methods**

-   `fold(fnLeft: Function, fnRight: Function): any` - Applies a function based on whether this is a Right or Left value.

-   `map(fn: Function): Either` - Maps a function over this Either.

-   `chain(fn: Function): Either` - Chains this Either with a function that returns an Either.

-   `ap(other: Either): Either` - Applies the function inside another Either to the value inside this Either.

-   `bimap(fnLeft: Function, fnRight: Function): Either` - Maps both sides of this Either.

-   `extend(fn: Function): Either` - Extends this Either with a function.

-   `equals(other: Either): boolean` - Checks equality with another Either.

-   `isRight(): boolean` - Checks if this is a Right value.

-   `isLeft(): boolean` - Checks if this is a Left value.

-   `toString(): string` - Returns a string representation of this Either.

**Fantasy Land Methods**

The `Either` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/chain`
-   `fantasy-land/ap`
-   `fantasy-land/bimap`
-   `fantasy-land/extend`
-   `fantasy-land/equals`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Either } = require("composity/fp/containers");

// Creating Either instances
const rightValue = Either.Right(5);
const leftValue = Either.Left("Error");

// Using map
const doubled = rightValue.map((x) => x * 2);
console.log(doubled.toString()); // Output: Right(10)

// Using chain
const safeDivide = (a, b) =>
    b === 0 ? Either.Left("Division by zero") : Either.Right(a / b);
const result = Either.Right(10).chain((x) => safeDivide(x, 2));
console.log(result.toString()); // Output: Right(5)

// Using fold
const printResult = (either) =>
    either.fold(
        (error) => console.log(`Error: ${error}`),
        (value) => console.log(`Result: ${value}`)
    );
printResult(Either.Right(42)); // Output: Result: 42
printResult(Either.Left("Something went wrong")); // Output: Error: Something went wrong
```

The `Either` monad is particularly useful for handling errors and representing computations that might fail. It allows you to chain operations and handle both success and failure cases in a functional and composable way.

## IO

The `IO` monad represents a computation that will perform I/O operations. It's used to encapsulate and compose operations with side effects.

### Class: IO

**Implements:** Functor, Apply, Applicative, Chain, Monad

**Constructor**

```js
new IO(effect: Function)
```

Creates a new `IO` instance.

-   `effect`: A function representing a side effect.

**Static Methods**

-   `IO.of(value: any): IO` - Creates an IO that will return the given value.

**Instance Methods**

-   `run(): any` - Executes the side effect.

-   `map(fn: Function): IO` - Maps a function over this IO.

-   `ap(other: IO): IO` - Applies the function inside another IO to the value inside this IO.

-   `chain(fn: Function): IO` - Chains this IO with a function that returns an IO.

**Fantasy Land Methods**

The `IO` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { IO } = require("composity/fp/containers");

// Creating IO instances
const getInput = new IO(() => prompt("Enter a number:"));
const logOutput = (x) => new IO(() => console.log(x));

// Using map and chain
const program = getInput
    .map(parseInt)
    .chain((n) => logOutput(`You entered: ${n}`));

// Running the IO
program.run();

// Using IO.of
const pureIO = IO.of(42);
pureIO.map((x) => x * 2).run(); // Output: 84
```

The `IO` monad is particularly useful for handling side effects in a pure functional way. It allows you to describe a sequence of I/O operations without immediately performing them, enabling better testability and composability of your code.

## KeyValueList

The `KeyValueList` represents an immutable key-value list with various functional programming capabilities. It provides a consistent interface for working with key-value pairs in a functional manner.

### Class: KeyValueList

**Implements:** Functor, Apply, Applicative, Chain, Monad, Bifunctor, Semigroup, Monoid, Foldable, Setoid

**Constructor**

```js
new KeyValueList(((entries: Array<[any, any]>) = []));
```

Creates a new `KeyValueList` instance.

-   `entries`: An optional array of key-value pairs to initialize the list.

**Static Methods**

-   `KeyValueList.of(value: any): KeyValueList` - Creates a KeyValueList containing a single key-value pair.

-   `KeyValueList.empty(): KeyValueList` - Creates an empty KeyValueList.

**Instance Methods**

-   `get(key: any): any` - Gets the value associated with the specified key.

-   `has(key: any): boolean` - Checks if the list contains the specified key.

-   `set(key: any, value: any): KeyValueList` - Creates a new KeyValueList with the specified key-value pair added or updated.

-   `delete(key: any): KeyValueList` - Creates a new KeyValueList with the specified key removed.

-   `size: number` - Gets the number of key-value pairs in the list.

-   `map(fn: Function): KeyValueList` - Maps a function over the values of this KeyValueList.

-   `ap(other: KeyValueList): KeyValueList` - Applies the functions in another KeyValueList to the values in this KeyValueList.

-   `chain(fn: Function): KeyValueList` - Chains this KeyValueList with a function that returns a KeyValueList.

-   `bimap(fnK: Function, fnV: Function): KeyValueList` - Maps functions over both keys and values of this KeyValueList.

-   `concat(other: KeyValueList): KeyValueList` - Concatenates this KeyValueList with another.

-   `reduce(fn: Function, initial: any): any` - Reduces the KeyValueList to a single value.

-   `equals(other: KeyValueList): boolean` - Checks if this KeyValueList is equal to another.

**Fantasy Land Methods**

The `KeyValueList` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/bimap`
-   `fantasy-land/concat`
-   `fantasy-land/reduce`
-   `fantasy-land/equals`
-   `fantasy-land/of` (static method)
-   `fantasy-land/empty` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { KeyValueList } = require("composity/fp/containers");

// Creating KeyValueList instances
const list1 = new KeyValueList([
    ["a", 1],
    ["b", 2],
]);
const list2 = new KeyValueList([
    ["b", 3],
    ["c", 4],
]);

// Using map
const doubled = list1.map((x) => x * 2);
console.log(doubled.toString()); // Output: KeyValueList({"a":2,"b":4})

// Using concat
const combined = list1.concat(list2);
console.log(combined.toString()); // Output: KeyValueList({"a":1,"b":3,"c":4})

// Using reduce
const sum = list1.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 3

// Using KeyValueList.of
const singlePair = KeyValueList.of(42);
console.log(singlePair.toString()); // Output: KeyValueList({"_":42})
```

The `KeyValueList` container is particularly useful for working with associative data structures in a functional programming style. It allows you to perform operations on key-value pairs while maintaining immutability and providing a rich set of functional programming capabilities.

## Lazy

The `Lazy` container represents a computation that defers evaluation until explicitly requested. It's useful for managing computations that may be expensive or have side effects, allowing you to control when they are executed.

### Class: Lazy

**Implements:** Functor, Apply, Applicative, Chain, Monad, Comonad

**Constructor**

```js
new Lazy(computation: Function)
```

Creates a new `Lazy` instance.

-   `computation`: A function representing a deferred computation.

**Static Methods**

-   `Lazy.of(value: any): Lazy` - Creates a Lazy that will return the given value.

**Instance Methods**

-   `evaluate(): any` - Evaluates the lazy computation.

-   `map(fn: Function): Lazy` - Maps a function over this Lazy computation.

-   `ap(other: Lazy): Lazy` - Applies the function inside another Lazy to the value inside this Lazy.

-   `chain(fn: Function): Lazy` - Chains this Lazy with a function that returns a Lazy.

-   `extend(fn: Function): Lazy` - Extends this Lazy with a function.

**Fantasy Land Methods**

The `Lazy` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/extend`
-   `fantasy-land/extract`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Lazy } = require("composity/fp/containers");

// Creating Lazy instances
const lazyComputation = new Lazy(() => {
    console.log("Performing expensive computation");
    return 42;
});

// Using map
const doubled = lazyComputation.map((x) => x * 2);

// Evaluation is deferred until explicitly requested
console.log("Before evaluation");
console.log(doubled.evaluate());
console.log("After evaluation");

// Output:
// Before evaluation
// Performing expensive computation
// 84
// After evaluation

// Using Lazy.of and chain
const greet = (name) => Lazy.of(`Hello, ${name}!`);
const lazyName = Lazy.of("Alice");
const lazyGreeting = lazyName.chain(greet);
console.log(lazyGreeting.evaluate()); // Output: Hello, Alice!

// Using extend
const addExclamation = (lazy) => lazy.evaluate() + "!";
const extendedGreeting = lazyGreeting.extend(addExclamation);
console.log(extendedGreeting.evaluate()); // Output: Hello, Alice!!
```

The `Lazy` container is particularly useful for managing computations that you want to defer or control precisely when they are executed. It allows you to build up a chain of operations that will only be performed when the final evaluate() method is called, providing powerful capabilities for optimization and control flow in functional programming scenarios.

## List

The `List` represents an immutable list with various functional programming capabilities. It provides a consistent interface for working with lists in a functional manner.

### Class: List

**Implements:** Functor, Apply, Applicative, Chain, Monad, Semigroup, Monoid, Foldable, Filterable, Setoid, Alt, Plus, Alternative

**Constructor**

```js
new List(((values: Array) = []));
```

Creates a new `List` instance.

-   `values`: An optional array of values to initialize the list.

**Static Methods**

-   `List.of(value: any): List` - Creates a List containing a single value.

-   `List.empty(): List` - Creates an empty List.

**Instance Methods**

-   `map(fn: Function): List` - Maps a function over this List.

-   `ap(other: List): List` - Applies the functions in another List to the values in this List.

-   `chain(fn: Function): List` - Chains this List with a function that returns a List.

-   `concat(other: List): List` - Concatenates this List with another.

-   `reduce(fn: Function, initial: any): any` - Reduces the List to a single value.

-   `filter(pred: Function): List` - Filters the List based on a predicate function.

-   `equals(other: List): boolean` - Checks if this List is equal to another.

-   `alt(other: List): List` - Combines this List with another, keeping all elements.

**Fantasy Land Methods**

The `List` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/concat`
-   `fantasy-land/reduce`
-   `fantasy-land/filter`
-   `fantasy-land/equals`
-   `fantasy-land/alt`
-   `fantasy-land/of` (static method)
-   `fantasy-land/empty` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { List } = require("composity/fp/containers");

// Creating List instances
const list1 = new List([1, 2, 3]);
const list2 = new List([4, 5, 6]);

// Using map
const doubled = list1.map((x) => x * 2);
console.log(doubled.toString()); // Output: List(2,4,6)

// Using concat
const combined = list1.concat(list2);
console.log(combined.toString()); // Output: List(1,2,3,4,5,6)

// Using reduce
const sum = list1.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 6

// Using filter
const evens = list1.filter((x) => x % 2 === 0);
console.log(evens.toString()); // Output: List(2)

// Using List.of and chain
const duplicate = (x) => List.of(x).concat(List.of(x));
const duplicated = list1.chain(duplicate);
console.log(duplicated.toString()); // Output: List(1,1,2,2,3,3)

// Using alt
const altList = list1.alt(list2);
console.log(altList.toString()); // Output: List(1,2,3,4,5,6)
```

The `List` container is particularly useful for working with sequences of values in a functional programming style. It provides a rich set of operations that allow you to transform, combine, and analyze lists while maintaining immutability and adhering to functional programming principles.

## Maybe

The `Maybe` represents a value that may or may not exist. It can be either Some value or None. This is useful for handling potentially undefined or null values in a safe and functional manner.

### Class: Maybe

**Implements:** Functor, Apply, Applicative, Chain, Monad, Alt, Plus, Alternative, Extend, Setoid

**Constructor**

```js
new Maybe(value: any)
```

Creates a new `Maybe` instance.

-   `value`: The value to wrap.

**Static Methods**

-   `Maybe.Some(value: any): Maybe` - Creates a Some Maybe.

-   `Maybe.None(): Maybe` - Creates a None Maybe.

-   `Maybe.of(value: any): Maybe` - Creates a Some Maybe (Applicative of).

-   `Maybe.empty(): Maybe` - Creates a None Maybe (Monoid empty).

**Instance Methods**

-   `getOrElse(defaultValue: any): any` - Returns the value if it's Some, or the provided default value if it's None.

-   `map(fn: Function): Maybe` - Maps a function over this Maybe.

-   `chain(fn: Function): Maybe` - Chains this Maybe with a function that returns a Maybe.

-   `ap(other: Maybe): Maybe` - Applies the function inside another Maybe to the value inside this Maybe.

-   `filter(pred: Function): Maybe` - Filters the Maybe based on a predicate function.

-   `alt(other: Maybe): Maybe` - Returns this Maybe if it's Some, otherwise returns the other Maybe.

-   `extend(fn: Function): Maybe` - Extends this Maybe with a function.

-   `join(): Maybe` - Flattens a nested Maybe.

-   `equals(other: Maybe): boolean` - Checks if this Maybe is equal to another.

-   `isNone(): boolean` - Checks if this Maybe is None.

-   `isSome(): boolean` - Checks if this Maybe is Some.

**Fantasy Land Methods**

The Maybe class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/chain`
-   `fantasy-land/ap`
-   `fantasy-land/alt`
-   `fantasy-land/extend`
-   `fantasy-land/join`
-   `fantasy-land/equals`
-   `fantasy-land/of` (static method)
-   `fantasy-land/empty` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Maybe } = require("composity/fp/containers");

// Creating Maybe instances
const someValue = Maybe.Some(5);
const noneValue = Maybe.None();

// Using map
const doubled = someValue.map((x) => x * 2);
console.log(doubled.toString()); // Output: Some(10)

// Using getOrElse
console.log(someValue.getOrElse(0)); // Output: 5
console.log(noneValue.getOrElse(0)); // Output: 0

// Using chain
const safeDivide = (a, b) => (b === 0 ? Maybe.None() : Maybe.Some(a / b));
const result = Maybe.Some(10).chain((x) => safeDivide(x, 2));
console.log(result.toString()); // Output: Some(5)

// Using filter
const evenOnly = someValue.filter((x) => x % 2 === 0);
console.log(evenOnly.toString()); // Output: None

// Using alt
const altResult = noneValue.alt(Maybe.Some(42));
console.log(altResult.toString()); // Output: Some(42)

// Using extend
const extended = someValue.extend((m) => m.getOrElse(0) + 1);
console.log(extended.toString()); // Output: Some(6)
```

The `Maybe` container is particularly useful for handling nullable values and computations that might fail. It provides a safe way to perform operations on values that may or may not exist, without the need for explicit null checks throughout your code.

## Reader

The `Reader` represents a computation that can read values from a shared environment. It's useful for dependency injection and for computations that rely on some configuration or context.

### Class: Reader

**Implements**: Functor, Apply, Applicative, Chain, Monad

**Constructor**

```js
new Reader(run: Function)
```

Creates a new `Reader` instance.

-   `run`: A function that takes an environment and returns a value.

**Static Methods**

-   `Reader.ask(): Reader` - Creates a Reader that returns the environment itself.

-   `Reader.asks(fn: Function): Reader` - Creates a Reader that applies a function to the environment.

-   `Reader.of(value: any): Reader` - Creates a Reader that will return the given value.

**Instance Methods**

-   `runWith(env: any): any` - Runs the Reader with a given environment.

-   `map(fn: Function): Reader` - Maps a function over this Reader.

-   `ap(other: Reader): Reader` - Applies the function inside another Reader to the value inside this Reader.

-   `chain(fn: Function): Reader` - Chains this Reader with a function that returns a Reader.

**Fantasy Land Methods**

The `Reader` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Reader } = require("composity/fp/containers");

// Define an environment
const env = {
    greeting: "Hello",
    punctuation: "!",
};

// Create a Reader that reads from the environment
const getGreeting = Reader.asks((env) => env.greeting);
const getPunctuation = Reader.asks((env) => env.punctuation);

// Combine Readers
const createMessage = getGreeting.chain((greeting) =>
    getPunctuation.map((punctuation) => `${greeting}, World${punctuation}`)
);

// Run the Reader with the environment
console.log(createMessage.runWith(env)); // Output: "Hello, World!"

// Using map
const shoutGreeting = getGreeting.map((greeting) => greeting.toUpperCase());
console.log(shoutGreeting.runWith(env)); // Output: "HELLO"

// Using Reader.of and ap
const addExclamation = Reader.of((str) => `${str}!`);
const excitedGreeting = addExclamation.ap(getGreeting);
console.log(excitedGreeting.runWith(env)); // Output: "Hello!"

// Using chain for more complex operations
const greetPerson = (name) =>
    Reader.asks((env) => `${env.greeting}, ${name}${env.punctuation}`);

const greetAlice = Reader.ask().chain((env) => greetPerson("Alice"));
console.log(greetAlice.runWith(env)); // Output: "Hello, Alice!"
```

The `Reader` monad is particularly useful for computations that need to read from a shared environment or configuration. It allows you to compose and chain operations that depend on this shared context, without explicitly passing the environment through each function call. This leads to cleaner and more modular code, especially in scenarios involving dependency injection or configuration management.

## State

The `State` represents computations with mutable state. It allows you to chain computations that can read from and write to a shared state, without actually mutating any external state.

### Class: State

**Implements**: Functor, Apply, Applicative, Chain, Monad

**Constructor**

```js
new State(run: Function)
```

Creates a new `State` instance.

-   `run`: A function that takes a state and returns a tuple of \[value, newState].

**Static Methods**

-   `State.of(value: any): State` - Creates a State that will return the given value.

**Instance Methods**

-   `get(): State` - Creates a State that returns the current state.

-   `put(newState: any): State` - Creates a State that sets a new state.

-   `modify(fn: Function): State` - Creates a State that modifies the current state.

-   `evaluate(initialState: any): any` - Evaluates the State with an initial state and returns the final value.

-   `execute(initialState: any): any` - Executes the State with an initial state and returns the final state.

-   `map(fn: Function): State` - Maps a function over this State.

-   `ap(other: State): State` - Applies the function inside another State to the value inside this State.

-   `chain(fn: Function): State` - Chains this State with a function that returns a State.

**Fantasy Land Methods**

The State class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { State } = require("composity/fp/containers");

// Define a simple counter state
const increment = State.of(1).chain(
    (n) => new State((state) => [n, state + n])
);

// Chain multiple state operations
const addThree = increment.chain(() => increment.chain(() => increment));

console.log(addThree.evaluate(0)); // Output: 1
console.log(addThree.execute(0)); // Output: 3

// Using get and put
const doubleState = State.prototype
    .get()
    .chain((state) => State.prototype.put(state * 2));

console.log(doubleState.execute(5)); // Output: 10

// More complex example: managing a stack
const push = (x) => new State((stack) => [null, [x, ...stack]]);
const pop = new State(([top, ...rest]) => [top, rest]);

const stackOperations = push(1)
    .chain(() => push(2))
    .chain(() => push(3))
    .chain(() => pop)
    .chain((popped) =>
        State.of(`Popped ${popped}`).chain((msg) =>
            State.prototype
                .get()
                .map(
                    (stack) => `${msg}, remaining stack: [${stack.join(", ")}]`
                )
        )
    );

console.log(stackOperations.evaluate([])); // Output: "Popped 3, remaining stack: [2, 1]"
```

The `State` monad is particularly useful for computations that need to maintain and modify state throughout a series of operations. It allows you to write stateful computations in a pure functional way, making it easier to reason about and test your code. This is especially valuable in scenarios where you need to track changes over time or manage complex state transitions without resorting to mutable variables.

## Task

The `Task` represents an asynchronous computation that may succeed or fail. It provides a way to handle asynchronous operations in a functional and composable manner.

### Class: Task

**Implements**: Functor, Apply, Applicative, Chain, Monad, Bifunctor

**Constructor**

```js
new Task(computation: (resolve: Function, reject: Function) => void)
```

Creates a new `Task` instance.

-   `computation`: A function representing an asynchronous computation. It takes two arguments:

    -   `resolve`: A function to call with the successful result.

    -   `reject`: A function to call with the failure reason.

**Static Methods**

-   `Task.of(value: any): Task` - Creates a Task that will resolve with the given value.

**Instance Methods**

-   `fork(resolve: Function, reject: Function): void` - Executes the Task, calling resolve on success or reject on failure.

-   `toPromise(): Promise<any>` - Converts the Task to a Promise.

-   `map(fn: Function): Task` - Maps a function over this Task.

-   `ap(other: Task): Task` - Applies the function inside another Task to the value inside this Task.

-   `chain(fn: Function): Task` - Chains this Task with a function that returns a Task.

-   `bimap(f: Function, g: Function): Task` - Maps both sides of this Task.

**Fantasy Land Methods**

The `Task` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/bimap`
-   `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Task } = require("composity/fp/containers");

// Creating Task instances
const successTask = Task.of(42);
const failTask = new Task((_, reject) => reject("Error"));

// Using map
const doubledTask = successTask.map((x) => x * 2);
doubledTask.fork(
    (result) => console.log(result), // Output: 84
    (error) => console.error(error)
);

// Using chain
const safeDivide = (a, b) =>
    new Task((resolve, reject) =>
        b === 0 ? reject("Division by zero") : resolve(a / b)
    );

Task.of(10)
    .chain((x) => safeDivide(x, 2))
    .fork(
        (result) => console.log(result), // Output: 5
        (error) => console.error(error)
    );

// Using bimap
const bimappedTask = failTask.bimap(
    (x) => x * 2,
    (err) => `Caught error: ${err}`
);

bimappedTask.fork(
    (result) => console.log(result),
    (error) => console.error(error) // Output: Caught error: Error
);

// Converting to Promise
successTask
    .toPromise()
    .then((result) => console.log(result)) // Output: 42
    .catch((error) => console.error(error));
```

The `Task` container is particularly useful for handling asynchronous operations in a functional way. It allows you to compose and chain asynchronous computations, handle both success and failure cases, and convert between Tasks and Promises when needed.

## UniqueList

The `UniqueList` represents an immutable list of unique values with various functional programming capabilities. It provides a consistent interface for working with unique sets of values in a functional manner.

### Class: UniqueList

**Implements**: Functor, Apply, Applicative, Chain, Monoid, Foldable, Filterable, Setoid, Alt, Plus, Alternative

**Constructor**

```js
new UniqueList(((values: Array) = []));
```

Creates a new `UniqueList` instance.

-   `values`: An optional array of initial values for the list.

**Static Methods**

-   `UniqueList.of(value: any): UniqueList` - Creates a UniqueList containing a single value.

-   `UniqueList.empty(): UniqueList` - Creates an empty UniqueList.

**Instance Methods**

-   `has(value: any): boolean` - Checks if the list contains a specific value.

-   `add(value: any): UniqueList` - Adds a value to the list.

-   `delete(value: any): UniqueList` - Removes a value from the list.

-   `size: number` - Gets the number of unique elements in the list.

-   `map(fn: Function): UniqueList` - Maps a function over this UniqueList.

-   `ap(other: UniqueList): UniqueList` - Applies the functions in another UniqueList to the values in this UniqueList.

-   `chain(fn: Function): UniqueList` - Chains this UniqueList with a function that returns a UniqueList.

-   `concat(other: UniqueList): UniqueList` - Concatenates this UniqueList with another.

-   `reduce(fn: Function, initial: any): any` - Reduces the UniqueList to a single value.

-   `filter(pred: Function): UniqueList` - Filters the UniqueList based on a predicate function.

-   `equals(other: UniqueList): boolean` - Checks if this UniqueList is equal to another.

-   `alt(other: UniqueList): UniqueList` - Combines this UniqueList with another, removing duplicates.

-   `toString(): string` - Returns a string representation of the UniqueList.

**Fantasy Land Methods**

The `UniqueList` class implements the following Fantasy Land methods:

-   `fantasy-land/map`
-   `fantasy-land/ap`
-   `fantasy-land/chain`
-   `fantasy-land/concat`
-   `fantasy-land/reduce`
-   `fantasy-land/filter`
-   `fantasy-land/equals`
-   `fantasy-land/alt`
-   `fantasy-land/of` (static method)
-   `fantasy-land/empty` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { UniqueList } = require("composity/fp/containers");

// Creating UniqueList instances
const list1 = new UniqueList([1, 2, 3, 2, 1]);
const list2 = new UniqueList([3, 4, 5]);

console.log(list1.toString()); // Output: UniqueList(1,2,3)

// Using map
const doubled = list1.map((x) => x * 2);
console.log(doubled.toString()); // Output: UniqueList(2,4,6)

// Using concat
const combined = list1.concat(list2);
console.log(combined.toString()); // Output: UniqueList(1,2,3,4,5)

// Using reduce
const sum = list1.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 6

// Using filter
const evens = list1.filter((x) => x % 2 === 0);
console.log(evens.toString()); // Output: UniqueList(2)

// Using UniqueList.of and chain
const duplicate = (x) => UniqueList.of(x).concat(UniqueList.of(x + 1));
const duplicated = list1.chain(duplicate);
console.log(duplicated.toString()); // Output: UniqueList(1,2,3,4)

// Using alt
const altList = list1.alt(list2);
console.log(altList.toString()); // Output: UniqueList(1,2,3,4,5)
```

The `UniqueList` container is particularly useful for working with sets of unique values in a functional programming style. It provides a rich set of operations that allow you to transform, combine, and analyze unique lists while maintaining immutability and adhering to functional programming principles.
