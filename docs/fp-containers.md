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

Creates a new Either instance.

- `isRight`: Indicates if this is a Right value.

- `value`: The wrapped value.

**Static Methods**

- `Either.Right(value: any): Either` - Creates a Right Either.

- `Either.Left(value: any): Either` - Creates a Left Either.

- `Either.of(value: any): Either` - Creates a Right Either (Applicative of).

**Instance Methods**

fold(fnLeft: Function, fnRight: Function): any
Applies a function based on whether this is a Right or Left value.
map(fn: Function): Either
Maps a function over this Either.
chain(fn: Function): Either
Chains this Either with a function that returns an Either.
ap(other: Either): Either
Applies the function inside another Either to the value inside this Either.
bimap(fnLeft: Function, fnRight: Function): Either
Maps both sides of this Either.
extend(fn: Function): Either
Extends this Either with a function.
equals(other: Either): boolean
Checks equality with another Either.
isRight(): boolean
Checks if this is a Right value.
isLeft(): boolean
Checks if this is a Left value.
toString(): string
Returns a string representation of this Either.
Fantasy Land Methods
The Either class implements the following Fantasy Land methods:

fantasy-land/map
fantasy-land/chain
fantasy-land/ap
fantasy-land/bimap
fantasy-land/extend
fantasy-land/equals
fantasy-land/of (static method)

These methods provide compatibility with libraries that support the Fantasy Land specification.
Examples

