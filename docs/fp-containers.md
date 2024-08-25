# Functional Programming Containers in Composize

## Introduction

Composize provides a set of functional programming containers that adhere to the Fantasy Land specification. These containers encapsulate values and provide a consistent interface for working with them in a functional manner. They allow you to handle various scenarios such as computations that might fail, side effects, and more, all while maintaining the principles of functional programming.

The containers in Composize are designed to be composable, allowing you to chain operations and combine different containers seamlessly. They provide a powerful toolset for writing clean, maintainable, and robust functional code.

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

**Implements**: Functor, Chain, Apply, Applicative, Bifunctor, Extend, Setoid

**Constructor**

```js
new Either(isRight: boolean, value: any)
```

Creates a new `Either` instance.

- `isRight`: Indicates if this is a Right value.

- `value`: The wrapped value.

**Static Methods**

- `Either.Right(value: any): Either` - Creates a Right Either.

- `Either.Left(value: any): Either` - Creates a Left Either.

- `Either.of(value: any): Either` - Creates a Right Either (Applicative of).

**Instance Methods**

- `fold(fnLeft: Function, fnRight: Function): any` - Applies a function based on whether this is a Right or Left value.

- `map(fn: Function): Either` - Maps a function over this Either.

- `chain(fn: Function): Either` - Chains this Either with a function that returns an Either.

- `ap(other: Either): Either` - Applies the function inside another Either to the value inside this Either.

- `bimap(fnLeft: Function, fnRight: Function): Either` - Maps both sides of this Either.

- `extend(fn: Function): Either` - Extends this Either with a function.

- `equals(other: Either): boolean` - Checks equality with another Either.

- `isRight(): boolean` - Checks if this is a Right value.

- `isLeft(): boolean` - Checks if this is a Left value.

- `toString(): string` - Returns a string representation of this Either.

**Fantasy Land Methods**

The `Either` class implements the following Fantasy Land methods:

- `fantasy-land/map`
- `fantasy-land/chain`
- `fantasy-land/ap`
- `fantasy-land/bimap`
- `fantasy-land/extend`
- `fantasy-land/equals`
- `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { Either } = require('composize/fp/containers');

// Creating Either instances
const rightValue = Either.Right(5);
const leftValue = Either.Left('Error');

// Using map
const doubled = rightValue.map(x => x * 2);
console.log(doubled.toString()); // Output: Right(10)

// Using chain
const safeDivide = (a, b) => b === 0 ? Either.Left('Division by zero') : Either.Right(a / b);
const result = Either.Right(10).chain(x => safeDivide(x, 2));
console.log(result.toString()); // Output: Right(5)

// Using fold
const printResult = either => either.fold(
  error => console.log(`Error: ${error}`),
  value => console.log(`Result: ${value}`)
);
printResult(Either.Right(42)); // Output: Result: 42
printResult(Either.Left('Something went wrong')); // Output: Error: Something went wrong
```

The `Either` monad is particularly useful for handling errors and representing computations that might fail. It allows you to chain operations and handle both success and failure cases in a functional and composable way.

## IO

The `IO` monad represents a computation that will perform I/O operations. It's used to encapsulate and compose operations with side effects.

### Class: IO

**Implements**: Functor, Apply, Applicative, Chain, Monad

**Constructor**

```js
new IO(effect: Function)
```

Creates a new `IO` instance.

- `effect`: A function representing a side effect.

**Static Methods**

- `IO.of(value: any): IO` - Creates an IO that will return the given value.

**Instance Methods**

- `run(): any` - Executes the side effect.

- `map(fn: Function): IO` - Maps a function over this IO.

- `ap(other: IO): IO` - Applies the function inside another IO to the value inside this IO.

- `chain(fn: Function): IO` - Chains this IO with a function that returns an IO.

**Fantasy Land Methods**

The `IO` class implements the following Fantasy Land methods:

- `fantasy-land/map`
- `fantasy-land/ap`
- `fantasy-land/chain`
- `fantasy-land/of` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { IO } = require('composize/fp/containers');

// Creating IO instances
const getInput = new IO(() => prompt('Enter a number:'));
const logOutput = x => new IO(() => console.log(x));

// Using map and chain
const program = getInput
  .map(parseInt)
  .chain(n => logOutput(`You entered: ${n}`));

// Running the IO
program.run();

// Using IO.of
const pureIO = IO.of(42);
pureIO.map(x => x * 2).run(); // Output: 84
```

The `IO` monad is particularly useful for handling side effects in a pure functional way. It allows you to describe a sequence of I/O operations without immediately performing them, enabling better testability and composability of your code.

## KeyValueList

The `KeyValueList` represents an immutable key-value list with various functional programming capabilities. It provides a consistent interface for working with key-value pairs in a functional manner.

### Class: KeyValueList

**Implements:** Functor, Apply, Applicative, Chain, Monad, Bifunctor, Semigroup, Monoid, Foldable, Setoid

**Constructor**

```js
new KeyValueList(entries: Array<[any, any]> = [])
```

Creates a new `KeyValueList` instance.

- `entries`: An optional array of key-value pairs to initialize the list.

**Static Methods**

- `KeyValueList.of(value: any): KeyValueList` - Creates a KeyValueList containing a single key-value pair.

- `KeyValueList.empty(): KeyValueList` - Creates an empty KeyValueList.

**Instance Methods**

- `get(key: any): any` - Gets the value associated with the specified key.

- `has(key: any): boolean` - Checks if the list contains the specified key.

- `set(key: any, value: any): KeyValueList` - Creates a new KeyValueList with the specified key-value pair added or updated.

- `delete(key: any): KeyValueList` - Creates a new KeyValueList with the specified key removed.

- `size: number` - Gets the number of key-value pairs in the list.

- `map(fn: Function): KeyValueList` - Maps a function over the values of this KeyValueList.

- `ap(other: KeyValueList): KeyValueList` - Applies the functions in another KeyValueList to the values in this KeyValueList.

- `chain(fn: Function): KeyValueList` - Chains this KeyValueList with a function that returns a KeyValueList.

- `bimap(fnK: Function, fnV: Function): KeyValueList` - Maps functions over both keys and values of this KeyValueList.

- `concat(other: KeyValueList): KeyValueList` - Concatenates this KeyValueList with another.

- `reduce(fn: Function, initial: any): any` - Reduces the KeyValueList to a single value.

- `equals(other: KeyValueList): boolean` - Checks if this KeyValueList is equal to another.

**Fantasy Land Methods**

The `KeyValueList` class implements the following Fantasy Land methods:

- `fantasy-land/map`
- `fantasy-land/ap`
- `fantasy-land/chain`
- `fantasy-land/bimap`
- `fantasy-land/concat`
- `fantasy-land/reduce`
- `fantasy-land/equals`
- `fantasy-land/of` (static method)
- `fantasy-land/empty` (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.

**Examples**

```js
const { KeyValueList } = require('composize/fp/containers');

// Creating KeyValueList instances
const list1 = new KeyValueList([['a', 1], ['b', 2]]);
const list2 = new KeyValueList([['b', 3], ['c', 4]]);

// Using map
const doubled = list1.map(x => x * 2);
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



































