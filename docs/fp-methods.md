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
11. [head](#head)
12. [isNil](#isnil)
13. [keys](#keys)
14. [map](#map)
15. [memoize](#memoize)
16. [mergeAll](#mergeall)
17. [nth](#nth)
18. [partial](#partial)
19. [pipe](#pipe)
20. [prop](#prop)
21. [reduce](#reduce)
22. [reverse](#reverse)
23. [some](#some)
24. [swap](#swap)
25. [tail](#tail)
26. [values](#values)


## placeholder

```js
const _ = { "@@composize/placeholder": true };
```

A placeholder object used in partial function application and currying.

## clone

```js
clone(obj: any): any
```

Creates a deep clone of the provided object or array.

#### Parameters:

- `obj`: The object or array to clone.

**Returns:** A new deep copy of the input.

**Example:**

```js
const original = { a: 1, b: { c: 2 } };
const cloned = clone(original);
console.log(cloned); // Output: { a: 1, b: { c: 2 } }
console.log(cloned === original); // Output: false
console.log(cloned.b === original.b); // Output: false
```

## compose

```js
compose(...fns: Function[]): Function
```

Composes multiple functions into a single function, applying them from right to left.

**Parameters:**

- `...fns`: The functions to compose.

**Returns:** A new function that is the composition of the input functions.

**Example:**

```js
const double = x => x * 2;
const addOne = x => x + 1;
const doubleThenAddOne = compose(addOne, double);
console.log(doubleThenAddOne(3)); // Output: 7
```

## curry

```js
curry(fn: Function): Function
```

Creates a curried version of the provided function.

**Parameters:**

- `fn`: The function to curry.

**Returns:** A curried version of the input function.

**Example:**

```js
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
```

## curryN

```js
curryN(length: number, fn: Function): Function
```

Creates a curried version of the provided function with a specified arity.

**Parameters:**

- `length`: The arity of the curried function.

- `fn`: The function to curry.

**Returns:** A curried version of the input function with the specified arity.

**Example:**

```js
const add = (a, b, c) => a + b + c;
const curriedAdd = curryN(3, add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
```

## every

```js
every(pred: Function, coll: Array): boolean
```

Checks if all elements in the collection satisfy the predicate.

**Parameters:**

- `pred`: The predicate function to test each element.

- `coll`: The collection to iterate over.

**Returns:** True if all elements satisfy the predicate, false otherwise.

**Example:**

```js
const isEven = x => x % 2 === 0;
console.log(every(isEven, [2, 4, 6, 8])); // Output: true
console.log(every(isEven, [2, 4, 5, 8])); // Output: false
```

## filter

```js
filter(pred: Function, coll: Array): Array
```

Filters elements of an array based on a predicate function.

**Parameters:**

- `pred`: The function to test each element of the array.

- `coll`: The array to filter.

**Returns:** A new array with elements that pass the test.

**Example:**

```js
const isEven = x => x % 2 === 0;
console.log(filter(isEven, [1, 2, 3, 4, 5])); // Output: [2, 4]
```

## find

```js
find(pred: Function, coll: Array): any
```
Finds the first element in the collection satisfying the predicate.

**Parameters:**

- `pred`: The predicate function to test with.

- `coll`: The collection to search.

**Returns:** The first element that satisfies the predicate, or undefined.

**Example:**

```js
const isEven = x => x % 2 === 0;
console.log(find(isEven, [1, 3, 4, 5])); // Output: 4
```

## flip

```js
flip(fn: Function): Function
```

Creates a new function that calls the provided function with its arguments reversed.

**Parameters:**

- `fn`: The function to flip.

**Returns:** A new function with reversed argument order.

**Example:**

```js
const subtract = (a, b) => a - b;
const flippedSubtract = flip(subtract);
console.log(flippedSubtract(3, 7)); // Output: 4 (7 - 3)
```

## forEach

```js
forEach(fn: Function, coll: Array): Array
```

Iterates over a collection, calling a provided function for each element.

**Parameters:**

- `fn`: The function to call for each element.

- `coll`: The collection to iterate over.

**Returns:** The original collection.

**Example:**

```js
const logItem = x => console.log(x);
forEach(logItem, [1, 2, 3]); // Logs: 1, 2, 3
```

## head

```js
head(coll: Array|string): any
```

Returns the first element of an array or string.

**Parameters:**

- `coll`: The collection to get the first element from.

**Returns:** The first element of the collection.

**Throws:** TypeError if the input is not an array or string.

**Example:**

```js
console.log(head([1, 2, 3])); // Output: 1
console.log(head("hello")); // Output: "h"
```

## isNil

```js
isNil(value: any): boolean
```

Checks if a value is null or undefined.

**Parameters:**

- `value`: The value to check.

**Returns:** True if the value is null or undefined, false otherwise.

**Example:**

```js
console.log(isNil(null)); // Output: true
console.log(isNil(undefined)); // Output: true
console.log(isNil(0)); // Output: false
```

## keys

```js
keys(obj: Object): Array
```

Returns an array of a given object's own enumerable property names.

**Parameters:**

- `obj`: The object whose properties are to be returned.

**Returns:** An array of the object's own enumerable property names.

**Example:**

```js
console.log(keys({a: 1, b: 2, c: 3})); // Output: ["a", "b", "c"]
```

## map

```js
map(transformer: Function, coll: Array): Array
```

Creates a new array with the results of calling a provided function on every element in the array.

**Parameters:**

- `transformer:` Function that produces an element of the new array.

- `coll`: Array to map over.

**Returns:** A new array with each element being the result of the transformer function.

**Example:**

```js
const double = x => x * 2;
console.log(map(double, [1, 2, 3])); // Output: [2, 4, 6]
```

## memoize

```js
memoize(fn: Function): Function
```

Creates a new function that memoizes (caches) the result of a given function.

**Parameters:**

- `fn`: The function to memoize.

**Returns:** A new memoized function.

**Example:**

```js
const expensiveOperation = memoize(x => {
  console.log('Computing...');
  return x * 2;
});
console.log(expensiveOperation(4)); // Logs: Computing... Output: 8
console.log(expensiveOperation(4)); // Output: 8 (no log, result from cache)
```

## mergeAll

```js
mergeAll(...objs: Object[]): Object
```

Merges a list of objects into a single object.

**Parameters:**

- `...objs`: The objects to merge.

**Returns:** A new object with all properties from the input objects.

**Example:**

```js
console.log(mergeAll({a: 1}, {b: 2}, {c: 3})); // Output: {a: 1, b: 2, c: 3}
```

## nth

```js
nth(index: number, list: Array): any
```

Returns the nth element of a list.

**Parameters:**

- `index`: The index of the element to return.

- `list`: The list to get the element from.

**Returns:** The element at the specified index.

**Example:**

```js
console.log(nth(1, ['a', 'b', 'c'])); // Output: 'b'
```

## partial

```js
partial(fn: Function, ...args: any[]): Function
```

Partially applies a function, returning a new function that expects the remaining arguments.

**Parameters:**

- `fn`: The function to partially apply.

- `...args`: The arguments to partially apply.

**Returns:** A new function with some arguments of the original function applied.

**Example:**

```js
const greet = (greeting, name) => `${greeting}, ${name}!`;
const sayHello = partial(greet, "Hello");
console.log(sayHello("World")); // Output: "Hello, World!"
```

## pipe

```js
pipe(...fns: Function[]): Function
```

Performs left-to-right function composition.

**Parameters:**

- `...fns`: The functions to compose.

**Returns:** A new function that is the composition of the input functions.

**Example:**

```js
const double = x => x * 2;
const addOne = x => x + 1;
const doubleAndAddOne = pipe(double, addOne);
console.log(doubleAndAddOne(3)); // Output: 7
```

## prop

```js
prop(key: string|number, obj: Object|Array): any
```

Returns the value at the specified property of an object.

**Parameters:**

- `key`: The property name or array index.

- `obj`: The object or array to access.

**Returns:** The value at the specified property.

**Example:**

```js
const person = { name: "Alice", age: 30 };
console.log(prop("name", person)); // Output: "Alice"
const numbers = [10, 20, 30];
console.log(prop(1, numbers)); // Output: 20
```

## reduce 

```js
reduce(reducer: Function, init: any, coll: Array): any
```

Reduces a collection to a single value.

**Parameters:**

- `reducer`: The reducer function.

- `init`: The initial value.

- `coll`: The collection to reduce.

**Returns:** The final reduced value.

**Example:**

```js
const sum = (acc, val) => acc + val;
console.log(reduce(sum, 0, [1, 2, 3, 4, 5])); // Output: 15
```

## reverse

```js
reverse(coll: Array|string|Iterable): Array|string|Iterable
```

Reverses the elements of an array, string, or iterable.

**Parameters:**

- `coll`: The collection to reverse.

**Returns:** The reversed collection.

**Throws:** TypeError if the input cannot be reversed.

**Example:**

```js
console.log(reverse([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverse("hello")); // Output: "olleh"
```

## some

```js
some(pred: Function, coll: Array): boolean
```

Tests whether at least one element in the collection satisfies the predicate.

**Parameters:**

- `pred`: The predicate function to test with.

- `coll`: The collection to iterate over.

**Returns:** True if at least one element satisfies the predicate, false otherwise.

**Example:**

```js
const isEven = x => x % 2 === 0;
console.log(some(isEven, [1, 3, 5, 6, 7])); // Output: true
console.log(some(isEven, [1, 3, 5, 7])); // Output: false
```

## swap

```js
swap(idx1: number|string, idx2: number|string, obj: Array|Object|string): Array|Object|string
```

Swaps two elements in an array, object, or string.

**Parameters:**

- `idx1`: The first index or key.

- `idx2`: The second index or key.

- `obj`: The collection to perform the swap on.

**Returns:** A new collection with the elements swapped.

**Example:**

```js
console.log(swap(0, 2, [1, 2, 3])); // Output: [3, 2, 1]
console.log(swap("a", "b", {a: 1, b: 2, c: 3})); // Output: {a: 2, b: 1, c: 3}
console.log(swap(0, 2, "abc")); // Output: "cba"
```

## tail

```js
tail(coll: Array|string): Array|string
```

Returns all but the first element of an array or string.

**Parameters:**

- `coll`: The collection to get the tail of.

**Returns:** All but the first element of the input.

**Throws:** TypeError if the input is not an array or string.

**Example:**

```js
console.log(tail([1, 2, 3, 4])); // Output: [2, 3, 4]
console.log(tail("hello")); // Output: "ello"
```

## values

```js
values(obj: Object): Array
```

Returns an array of a given object's own enumerable property values.

**Parameters:**

- `obj`: The object whose values are to be returned.

**Returns:** An array of the object's own enumerable property values.

**Example:**

```js
const obj = { a: 1, b: 2, c: 3 };
console.log(values(obj)); // Output: [1, 2, 3]
```
