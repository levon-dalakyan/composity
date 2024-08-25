# Asynchronous Iterator Methods in Composize

## Introduction

Composize provides a powerful set of asynchronous iterator methods that allow you to work efficiently with asynchronous iterable data structures. These methods enable you to perform various operations on async iterables, such as filtering, mapping, and composing, in a lazy and memory-efficient manner.

The asynchronous iterator methods in Composize are designed to work with any async iterable object, including async generators and custom async iterables. They provide a flexible and functional approach to asynchronous data processing, allowing you to create complex asynchronous data transformations with ease.

## Table of Contents

1. [iAppendAsync](#iappendasync)
2. [iAverageAsync](#iaverageasync)
3. [iComposeAsync](#icomposeasync)
4. [iCountAsync](#icountasync)
5. [iEnumerateAsync](#ienumerateasync)
6. [iFilterAsync](#ifilterasync)
7. [iFindAsync](#ifindasync)
8. [iFirstAsync](#ifirstasync)
9. [iJoinAsync](#ijoinasync)
10. [iLastAsync](#ilastasync)
11. [iMapAsync](#imapasync)
12. [iMaxAsync](#imaxasync)
13. [iMinAsync](#iminasync)
14. [iPipeAsync](#ipipeasync)
15. [iPrependAsync](#iprependasync)
16. [iProductAsync](#iproductasync)
17. [iReduceAsync](#ireduceasync)
18. [iReverseAsync](#ireverseasync)
19. [iSeqAsync](#iseqasync)
20. [iSkipAsync](#iskipasync)
21. [iSkipWhileAsync](#iskipwhileasync)
22. [iSliceAsync](#isliceasync)
23. [iSumAsync](#isumasync)
24. [iTakeAsync](#itakeasync)
25. [iTakeWhileAsync](#itakewhileasync)
26. [iTapAsync](#itapasync)
27. [iToArrayAsync](#itoarrayasync)
28. [iToSetAsync](#itosetasync)
29. [iZipAsync](#izipasync)

## iAppendAsync

```js
iAppendAsync(...iterables: AsyncIterable[]): (iterable: AsyncIterable) => AsyncIterable
```

Creates an async iterator that appends multiple iterables to the given iterable.

**Parameters:**

- `...iterables`: The iterables to append.

**Returns:** A function that takes an async iterable and returns a new async iterable with the appended values.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3]; };
const moreNumbers = async function*() { yield* [4, 5]; };
const appendedNumbers = iAppendAsync(moreNumbers())(numbers());
for await (const num of appendedNumbers) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

## iAverageAsync

```js
iAverageAsync(iterable: AsyncIterable<number>): Promise<number>
```

Calculates the average of numeric values in an async iterable.

**Parameters:**

- `iterable`: The input async iterable containing numeric values.

**Returns:** A promise that resolves to the average of the values, or 0 if the iterable is empty.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
console.log(await iAverageAsync(numbers())); // Output: 3
```

## iComposeAsync

```js
iComposeAsync(...fns: ((iterable: AsyncIterable) => AsyncIterable)[]): (iterable: AsyncIterable) => AsyncIterable
```

Creates an async composition of functions that operate on async iterables. The functions are applied from right to left.

**Parameters:**

- `...fns`: The functions to compose.

**Returns:** A function that takes an async iterable and returns a new async iterable with all functions applied.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const evenSquares = iComposeAsync(
  iFilterAsync(x => x % 2 === 0),
  iMapAsync(x => x * x)
)(numbers());
for await (const num of evenSquares) {
  console.log(num);
}
// Output: 4, 16
```

## iCountAsync

```js
iCountAsync(iterable: AsyncIterable): Promise<number>
```

Counts the number of elements in an async iterable.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** A promise that resolves to the number of elements in the iterable.

**Example:**

```js
const letters = async function*() { yield* ['a', 'b', 'c']; };
console.log(await iCountAsync(letters())); // Output: 3
```

## iEnumerateAsync

```js
iEnumerateAsync(iterable: AsyncIterable): AsyncIterator<[number, any]>
```

Creates an async iterator that yields pairs of [index, value] for each element in the input async iterable.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** An async iterator that yields [index, value] pairs.

**Example:**

```js
const words = async function*() { yield* ['apple', 'banana', 'cherry']; };
const enumerated = iEnumerateAsync(words());
for await (const [index, word] of enumerated) {
  console.log(`${index}: ${word}`);
}
// Output:
// 0: apple
// 1: banana
// 2: cherry
```

## iFilterAsync

```js
iFilterAsync(predicate: (value: any) => boolean): (iterable: AsyncIterable) => AsyncIterator
```

Creates a filtering async iterator based on a predicate function.

**Parameters:**

- `predicate`: A function that returns true for values to be included.

**Returns:** A function that takes an async iterable and returns a filtering async iterator.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5, 6]; };
const evenNumbers = iFilterAsync(x => x % 2 === 0)(numbers());
for await (const num of evenNumbers) {
  console.log(num);
}
// Output: 2, 4, 6
```

## iFindAsync

```js
iFindAsync(predicate: (value: any) => boolean): (iterable: AsyncIterable) => Promise<any>
```

Creates a function that finds the first element in an async iterable that satisfies a predicate.

**Parameters:**

- `predicate`: A function that returns true for the desired element.

**Returns:** A function that takes an async iterable and returns a promise that resolves to the first matching element or undefined.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const firstEven = await iFindAsync(x => x % 2 === 0)(numbers());
console.log(firstEven); // Output: 2
```

## iFirstAsync

```js
iFirstAsync(iterable: AsyncIterable): Promise<any>
```

Returns the first element of an async iterable.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** A promise that resolves to the first element of the iterable, or undefined if the iterable is empty.

**Example:**

```js
const fruits = async function*() { yield* ['apple', 'banana', 'cherry']; };
console.log(await iFirstAsync(fruits())); // Output: 'apple'
```

## iJoinAsync

```js
iJoinAsync(separator?: string): (iterable: AsyncIterable) => Promise<string>
```

Creates a function that joins the elements of an async iterable into a string.

**Parameters:**

- `separator`: The separator to use between elements. Default is an empty string.

**Returns:** A function that takes an async iterable and returns a promise that resolves to a joined string.

**Example:**

```js
const words = async function*() { yield* ['Hello', 'world', '!']; };
const joinWithSpace = iJoinAsync(' ');
console.log(await joinWithSpace(words())); // Output: 'Hello world !'
```

## iLastAsync

```js
iLastAsync(iterable: AsyncIterable): Promise<any>
```

Returns the last element of an async iterable.

**Parameters:**

- `iterable:` The input async iterable.

**Returns:** A promise that resolves to the last element of the iterable, or undefined if the iterable is empty.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
console.log(await iLastAsync(numbers())); // Output: 5
```

## iMapAsync

```js
iMapAsync(fn: (value: any) => any): (iterable: AsyncIterable) => AsyncIterator
```

Creates a mapping async iterator based on a transformation function.

**Parameters:**

- `fn`: A function that transforms each value.

**Returns:** A function that takes an async iterable and returns a mapping async iterator.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4]; };
const doubled = iMapAsync(x => x * 2)(numbers());
for await (const num of doubled) {
  console.log(num);
}
// Output: 2, 4, 6, 8
```

## iMaxAsync

```js
iMaxAsync(iterable: AsyncIterable<number>): Promise<number>
```

Finds the maximum value in an async iterable of numbers.

**Parameters:**

- `iterable`: The input async iterable of numbers.

**Returns:** A promise that resolves to the maximum value, or -Infinity if the iterable is empty.

**Example:**

```js
const numbers = async function*() { yield* [3, 1, 4, 1, 5, 9, 2, 6]; };
console.log(await iMaxAsync(numbers())); // Output: 9
```

## iMinAsync

```js
iMinAsync(iterable: AsyncIterable<number>): Promise<number>
```

Finds the minimum value in an async iterable of numbers.

**Parameters:**

- `iterable`: The input async iterable of numbers.

**Returns:** A promise that resolves to the minimum value, or Infinity if the iterable is empty.

**Example:**

```js
const numbers = async function*() { yield* [3, 1, 4, 1, 5, 9, 2, 6]; };
console.log(await iMinAsync(numbers())); // Output: 1
```

## iPipeAsync

```js
iPipeAsync(...fns: ((iterable: AsyncIterable) => AsyncIterable)[]): (iterable: AsyncIterable) => AsyncIterable
```

Creates an async pipeline of functions that operate on async iterables. The functions are applied from left to right.

**Parameters:**

- `...fns`: The functions to pipeline.

**Returns:** A function that takes an async iterable and returns a new async iterable with all functions applied.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const doubledOdds = iPipeAsync(
  iFilterAsync(x => x % 2 !== 0),
  iMapAsync(x => x * 2)
)(numbers());
for await (const num of doubledOdds) {
  console.log(num);
}
// Output: 2, 6, 10
```

## iPrependAsync

```js
iPrependAsync(...iterables: AsyncIterable[]): (iterable: AsyncIterable) => AsyncIterable
```

Creates an async iterator that prepends multiple iterables to the given iterable.

**Parameters:**

- `...iterables`: The iterables to prepend.

**Returns:** A function that takes an async iterable and returns a new async iterable with the prepended values.

**Example:**

```js
const numbers = async function*() { yield* [3, 4, 5]; };
const moreNumbers = async function*() { yield* [1, 2]; };
const prependedNumbers = iPrependAsync(moreNumbers())(numbers());
for await (const num of prependedNumbers) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

## iProductAsync

```js
iProductAsync(iterable: AsyncIterable<number>): Promise<number>
```

Calculates the product of all numbers in an async iterable.

**Parameters:**

- `iterable`: The input async iterable of numbers.

**Returns:** A promise that resolves to the product of all numbers in the iterable.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4]; };
console.log(await iProductAsync(numbers())); // Output: 24
```

## iReduceAsync

```js
iReduceAsync(reducer: (acc: any, val: any, index: number, iterable: AsyncIterable) => any, init?: any): (iterable: AsyncIterable) => Promise<any>
```

Creates a reducing function for an async iterable.

**Parameters:**

- `reducer`: The reducer function.

- `init`: The initial value for the reduction (optional).

**Returns:** A function that takes an async iterable and returns a promise that resolves to the reduced value.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const sum = await iReduceAsync((acc, val) => acc + val, 0)(numbers());
console.log(sum); // Output: 15
```

## iReverseAsync

```js
iReverseAsync(iterable: AsyncIterable): AsyncIterable
```

Reverses the order of elements in an async iterable.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** A new async iterable with the elements in reverse order.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const reversed = iReverseAsync(numbers());
for await (const num of reversed) {
  console.log(num);
}
// Output: 5, 4, 3, 2, 1
```

## iSeqAsync

```js
iSeqAsync(...iterables: AsyncIterable[]): AsyncIterator
```

Creates an async iterator that sequentially yields elements from multiple async iterables.

**Parameters:**

- `...iterables`: The input async iterables.

**Returns:** An async iterator that yields elements from all input iterables in sequence.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3]; };
const letters = async function*() { yield* ['a', 'b', 'c']; };
const combined = iSeqAsync(numbers(), letters());
for await (const item of combined) {
  console.log(item);
}
// Output: 1, 2, 3, 'a', 'b', 'c'
```

## iSkipAsync

```js
iSkipAsync(amount?: number): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that skips a specified number of elements from the beginning of an async iterable.

**Parameters:**

- `amount`: The number of elements to skip. Default is 1.

**Returns:** A function that takes an async iterable and returns an async iterator skipping the specified number of elements.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const skipTwo = iSkipAsync(2)(numbers());
for await (const num of skipTwo) {
  console.log(num);
}
// Output: 3, 4, 5
```

## iSkipWhileAsync

```js
iSkipWhileAsync(predicate: (value: any) => boolean): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that skips elements from the beginning of an async iterable while a predicate returns true.

**Parameters:**

- `predicate`: A function that returns true for elements to be skipped.

**Returns:** A function that takes an async iterable and returns an async iterator skipping elements while the predicate is true.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5, 1, 2]; };
const skipWhileLessThan3 = iSkipWhileAsync(x => x < 3)(numbers());
for await (const num of skipWhileLessThan3) {
  console.log(num);
}
// Output: 3, 4, 5, 1, 2
```

## iSliceAsync

```js
iSliceAsync(from: number, to: number): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that yields a slice of an async iterable from a start index to an end index.

**Parameters:**

- `from`: The start index (inclusive).

- `to`: The end index (exclusive).

**Returns:** A function that takes an async iterable and returns an async iterator yielding the specified slice.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const sliced = iSliceAsync(1, 4)(numbers());
for await (const num of sliced) {
  console.log(num);
}
// Output: 2, 3, 4
```

## iSumAsync

```js
iSumAsync(iterable: AsyncIterable<number>): Promise<number>
```

Calculates the sum of all numbers in an async iterable.

**Parameters:**

- `iterable`: The input async iterable of numbers.

**Returns:** A promise that resolves to the sum of all numbers in the iterable.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
console.log(await iSumAsync(numbers())); // Output: 15
```

## iTakeAsync

```js
iTakeAsync(amount: number): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that yields a specified number of elements from the beginning of an async iterable.

**Parameters:**

- `amount`: The number of elements to take.

**Returns:** A function that takes an async iterable and returns an async iterator yielding the specified number of elements.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const takeThree = iTakeAsync(3)(numbers());
for await (const num of takeThree) {
  console.log(num);
}
// Output: 1, 2, 3
```

## iTakeWhileAsync

```js
iTakeWhileAsync(predicate: (value: any) => boolean): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that yields elements from the beginning of an async iterable while a predicate returns true.

**Parameters:**

- `predicate`: A function that returns true for elements to be taken.

**Returns:** A function that takes an async iterable and returns an async iterator yielding elements while the predicate is true.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
const takeLessThan4 = iTakeWhileAsync(x => x < 4)(numbers());
for await (const num of takeLessThan4) {
  console.log(num);
}
// Output: 1, 2, 3
```

## iTapAsync

```js
iTapAsync(fn: (value: any) => void): (iterable: AsyncIterable) => AsyncIterator
```

Creates an async iterator that applies a side-effect function to each element of an async iterable without modifying the elements.

**Parameters:**

- `fn`: A function to be called for each element.

**Returns:** A function that takes an async iterable and returns an async iterator applying the side-effect function.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3]; };
const logged = iTapAsync(console.log)(numbers());
for await (const num of logged) {}
// Logs: 1, 2, 3
```

## iToArrayAsync

```js
iToArrayAsync(iterable: AsyncIterable): Promise<Array>
```

Converts an async iterable to an array.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** A promise that resolves to an array containing all elements from the async iterable.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3]; };
console.log(await iToArrayAsync(numbers())); // Output: [1, 2, 3]
```

## iToSetAsync

```js
iToSetAsync(iterable: AsyncIterable): Promise<Set>
```

Converts an async iterable to a Set.

**Parameters:**

- `iterable`: The input async iterable.

**Returns:** A promise that resolves to a Set containing all unique elements from the async iterable.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 2, 3, 3, 3]; };
console.log(await iToSetAsync(numbers())); // Output: Set(3) { 1, 2, 3 }
```

## iZipAsync

```js
iZipAsync(...iterables: AsyncIterable[]): AsyncIterator
```

Creates an async iterator that yields arrays of elements from multiple async iterables, pairing them by index.

**Parameters:**

- `...iterables`: The input async iterables to be zipped.

**Returns:** An async iterator yielding arrays of elements from the input async iterables.

**Example:**

```js
const numbers = async function*() { yield* [1, 2, 3]; };
const letters = async function*() { yield* ['a', 'b', 'c']; };
const zipped = iZipAsync(numbers(), letters());
for await (const item of zipped) {
  console.log(item);
}
// Output: [1, 'a'], [2, 'b'], [3, 'c']
```
