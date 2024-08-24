# Functional Programming Methods in Composize

## Introduction

Composize provides a comprehensive set of functional programming methods that allow you to write clean, modular, and reusable code. These methods are designed to work with arrays, objects, and other data structures, enabling you to perform complex operations with ease.

The functional programming paradigm emphasizes the use of pure functions, immutability, and declarative code. Composize's methods adhere to these principles, helping you write more predictable and easier-to-test code.

## Table of Contents

1. [placeholder](#placeholder)
2. [clone](#clone)
3. [compose](#compose)
4. [curry](#curry)
5. [curryN](#curryn)
6. [every](#every)
7. [filter](#filter)
8. [find](#find)
9. [flip](#flip)
10. [forEach](#foreach)
... (list continues)

## Methods

### placeholder

```js
const _ = { "@@composize/placeholder": true };
```

A placeholder object used in partial function application and currying.

### clone

```js
clone(obj: any): any
```

Creates a deep clone of the provided object or array.

**Parameters:**
- ***obj***: The object or array to clone.

**Returns:** A new deep copy of the input.

**Example:**
```js
const original = { a: 1, b: { c: 2 } };
const cloned = clone(original);
console.log(cloned); // Output: { a: 1, b: { c: 2 } }
console.log(cloned === original); // Output: false
console.log(cloned.b === original.b); // Output: false
```
