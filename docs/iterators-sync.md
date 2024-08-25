# Synchronous Iterator Methods in Composize

## Introduction

Composize provides a powerful set of synchronous iterator methods that allow you to work efficiently with iterable data structures. These methods enable you to perform various operations on iterables, such as filtering, mapping, and composing, in a lazy and memory-efficient manner.

The synchronous iterator methods in Composize are designed to work with any iterable object, including arrays, strings, and custom iterables. They provide a flexible and functional approach to data processing, allowing you to create complex data transformations with ease.

## Table of Contents

1. [iAppend](#iappend)
2. [iAverage](#iaverage)
3. [iCompose](#icompose)
4. [iCount](#icount)
5. [iEnumerate](#ienumerate)
6. [iFilter](#ifilter)
7. [iFind](#ifind)
8. [iFirst](#ifirst)
9. [iJoin](#ijoin)
10. [iLast](#ilast)
11. [iMap](#imap)
12. [iMax](#imax)
13. [iMin](#imin)
14. [iPipe](#ipipe)
15. [iPrepend](#iprepend)
16. [iProduct](#iproduct)
17. [iReduce](#ireduce)
18. [iRepeat](#irepeat)
19. [iReverse](#ireverse)
20. [iSeq](#iseq)
21. [iSkip](#iskip)
22. [iSkipWhile](#iskipwhile)
23. [iSlice](#islice)
24. [iSum](#isum)
25. [iTake](#itake)
26. [iTakeWhile](#itakewhile)
27. [iTap](#itap)
28. [iToArray](#itoarray)
29. [iToSet](#itoset)
30. [iZip](#izip)

## iAppend

```js
iAppend(...iterables: Iterable[]): (iterable: Iterable) => Iterable
```

Creates an iterator that appends multiple iterables to the given iterable.

**Parameters:**

- `...iterables`: The iterables to append.

**Returns:** A function that takes an iterable and returns a new iterable with the appended values.

**Example:**

```js
const numbers = [1, 2, 3];
const moreNumbers = [4, 5];
const appendedNumbers = iAppend(moreNumbers)(numbers);
console.log([...appendedNumbers]); // Output: [1, 2, 3, 4, 5]
```

## iAverage

```js
iAverage(iterable: Iterable<number>): number
```

Calculates the average of numeric values in an iterable.

**Parameters:**

- `iterable`: The input iterable containing numeric values.

**Returns:** The average of the values, or 0 if the iterable is empty.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
console.log(iAverage(numbers)); // Output: 3
```

## iCompose

```js
iCompose(...fns: ((iterable: Iterable) => Iterable)[]): (iterable: Iterable) => Iterable
```

Creates a composition of functions that operate on iterables. The functions are applied from right to left.

**Parameters:**

- `...fns`: The functions to compose.

**Returns**: A function that takes an iterable and returns a new iterable with all functions applied.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
const evenSquares = iCompose(
  iFilter(x => x % 2 === 0),
  iMap(x => x * x)
)(numbers);
console.log([...evenSquares]); // Output: [4, 16]
```

## iCount

```js
iCount(iterable: Iterable): number
```

Counts the number of elements in an iterable.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** The number of elements in the iterable.

**Example:**

```js
letters = ['a', 'b', 'c'];
console.log(iCount(letters)); // Output: 3
```

## iEnumerate

```js
(iterable: Iterable): Iterator<[number, any]>
```

Creates an iterator that yields pairs of \[index, value] for each element in the input iterable.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** An iterator that yields \[index, value] pairs.

**Example:**

```js
words = ['apple', 'banana', 'cherry'];
for (const [index, word] of iEnumerate(words)) {
  console.log(`${index}: ${word}`);
}
// Output:
// 0: apple
// 1: banana
// 2: cherry
```

## iFilter

```js
(predicate: (value: any) => boolean): (iterable: Iterable) => Iterator
```

Creates a filtering iterator based on a predicate function.

**Parameters:**

- `predicate`: A function that returns true for values to be included.

**Returns:** A function that takes an iterable and returns a filtering iterator.

**Example:**

```js
numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = iFilter(x => x % 2 === 0)(numbers);
console.log([...evenNumbers]); // Output: [2, 4, 6]
```

## iFind

```js
(predicate: (value: any) => boolean): (iterable: Iterable) => any
```

Creates a function that finds the first element in an iterable that satisfies a predicate.

**Parameters:**

- `predicate`: A function that returns true for the desired element.

**Returns:** A function that takes an iterable and returns the first matching element or undefined.

**Example:**

```js
numbers = [1, 2, 3, 4, 5];
const firstEven = iFind(x => x % 2 === 0)(numbers);
console.log(firstEven); // Output: 2
```

## iFirst

```js
(iterable: Iterable): any
```

Returns the first element of an iterable.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** The first element of the iterable, or undefined if the iterable is empty.

**Example:**

```js
fruits = ['apple', 'banana', 'cherry'];
console.log(iFirst(fruits)); // Output: 'apple'
```

## iJoin

```js
(separator?: string): (iterable: Iterable) => string
```

Creates a function that joins the elements of an iterable into a string.

**Parameters:**

- `separator`: The separator to use between elements. Default is an empty string.

**Returns:** A function that takes an iterable and returns a joined string.

**Example:**

```js
words = ['Hello', 'world', '!'];
const joinWithSpace = iJoin(' ');
console.log(joinWithSpace(words)); // Output: 'Hello world !'
```

## iLast

```js
(iterable: Iterable): any
```

Returns the last element of an iterable.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** The last element of the iterable, or undefined if the iterable is empty.

**Example:**

```js
numbers = [1, 2, 3, 4, 5];
console.log(iLast(numbers)); // Output: 5
```

## iMap

```js
(fn: (value: any) => any): (iterable: Iterable) => Iterator
```

Creates a mapping iterator based on a transformation function.

**Parameters:**

- `fn`: A function that transforms each value.

**Returns:** A function that takes an iterable and returns a mapping iterator.

**Example:**

```js
numbers = [1, 2, 3, 4];
const doubled = iMap(x => x * 2)(numbers);
console.log([...doubled]); // Output: [2, 4, 6, 8]
```

## iMax

```js
(iterable: Iterable<number>): number
```

Finds the maximum value in an iterable of numbers.

**Parameters:**

- `iterable`: The input iterable of numbers.

**Returns:** The maximum value, or -Infinity if the iterable is empty.

**Example:**

```js
numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(iMax(numbers)); // Output: 9
```

## iMin

```js
(iterable: Iterable<number>): number
```

Finds the minimum value in an iterable of numbers.

**Parameters:**

- `iterable`: The input iterable of numbers.

**Returns:** The minimum value, or Infinity if the iterable is empty.

**Example:**

```js
numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(iMin(numbers)); // Output: 1
```

## iPipe

```js
(...fns: ((iterable: Iterable) => Iterable)[]): (iterable: Iterable) => Iterable
```

Creates a pipeline of functions that operate on iterables. The functions are applied from left to right.

**Parameters:**

- `...fns`: The functions to pipeline.

**Returns:** A function that takes an iterable and returns a new iterable with all functions applied.

**Example:**

```js
numbers = [1, 2, 3, 4, 5];
const doubledOdds = iPipe(
  iFilter(x => x % 2 !== 0),
  iMap(x => x * 2)
)(numbers);
console.log([...doubledOdds]); // Output: [2, 6, 10]
```

## iPrepend

```js
(...iterables: Iterable[]): (iterable: Iterable) => Iterable
```

Creates an iterator that prepends multiple iterables to the given iterable.

**Parameters:**

- `...iterables`: The iterables to prepend.

**Returns:** A function that takes an iterable and returns a new iterable with the prepended values.

**Example:**

```js
numbers = [3, 4, 5];
const moreNumbers = [1, 2];
const prependedNumbers = iPrepend(moreNumbers)(numbers);
console.log([...prependedNumbers]); // Output: [1, 2, 3, 4, 5]
```

## iProduct

```js
(iterable: Iterable<number>): number
```

Calculates the product of all numbers in an iterable.

**Parameters:**

- `iterable`: The input iterable of numbers.

**Returns:** The product of all numbers in the iterable.

**Example:**

```js
numbers = [1, 2, 3, 4];
console.log(iProduct(numbers)); // Output: 24
```

## iReduce

```js
(reducer: (acc: any, val: any, index: number, iterable: Iterable) => any, init?: any): (iterable: Iterable) => any
```

Creates a reducing function for an iterable.

**Parameters:**

- `reducer`: The reducer function.

- `init`: The initial value for the reduction (optional).

**Returns:** A function that takes an iterable and returns the reduced value.

**Example:**

```js
numbers = [1, 2, 3, 4, 5];
const sum = iReduce((acc, val) => acc + val, 0)(numbers);
console.log(sum); // Output: 15
```

## iRepeat

```js
(amount?: number): (iterable: Iterable) => Iterator
```

Creates an iterator that repeats the given iterable a specified number of times.

**Parameters:**

- `amount`: The number of times to repeat the iterable. Default is Infinity.

**Returns:** A function that takes an iterable and returns a repeating iterator.

**Example:**

```js
numbers = [1, 2, 3];
const repeatedTwice = iRepeat(2)(numbers);
console.log([...repeatedTwice]); // Output: [1, 2, 3, 1, 2, 3]
```

## iReverse

```js
(iterable: Iterable): Iterator
```

Creates an iterator that yields the elements of the input iterable in reverse order.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** An iterator that yields the elements in reverse order.

**Example:**

```js
numbers = [1, 2, 3, 4, 5];
const reversed = iReverse(numbers);
console.log([...reversed]); // Output: [5, 4, 3, 2, 1]
```

## iSeq

```js
iSeq(...iterables: Iterable[]): Iterator
```

Creates an iterator that sequentially yields elements from multiple iterables.

**Parameters:**

- `...iterables`: The input iterables.

**Returns:** An iterator that yields elements from all input iterables in sequence.

**Example:**

```js
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
const combined = iSeq(numbers, letters);
console.log([...combined]); // Output: [1, 2, 3, 'a', 'b', 'c']
```

## iSkip

```js
iSkip(amount?: number): (iterable: Iterable) => Iterator
```

Creates an iterator that skips a specified number of elements from the beginning of an iterable.

**Parameters:**

- `amount`: The number of elements to skip. Default is 1.

**Returns:** A function that takes an iterable and returns an iterator skipping the specified number of elements.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
const skipTwo = iSkip(2)(numbers);
console.log([...skipTwo]); // Output: [3, 4, 5]
```

## iSkipWhile

```js
iSkipWhile(predicate: (value: any) => boolean): (iterable: Iterable) => Iterator
```

Creates an iterator that skips elements from the beginning of an iterable while a predicate returns true.

**Parameters:**

- `predicate`: A function that returns true for elements to be skipped.

**Returns:** A function that takes an iterable and returns an iterator skipping elements while the predicate is true.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5, 1, 2];
const skipWhileLessThan3 = iSkipWhile(x => x < 3)(numbers);
console.log([...skipWhileLessThan3]); // Output: [3, 4, 5, 1, 2]
```

## iSlice

```js
iSlice(from: number, to: number): (iterable: Iterable) => Iterator
```

Creates an iterator that yields a slice of an iterable from a start index to an end index.

**Parameters:**

- `from`: The start index (inclusive).

- `to`: The end index (exclusive).

**Returns:** A function that takes an iterable and returns an iterator yielding the specified slice.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
const sliced = iSlice(1, 4)(numbers);
console.log([...sliced]); // Output: [2, 3, 4]
```

## iSum

```js
iSum(iterable: Iterable<number>): number
```

Calculates the sum of all numbers in an iterable.

**Parameters:**

- `iterable`: The input iterable of numbers.

**Returns**: The sum of all numbers in the iterable.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
console.log(iSum(numbers)); // Output: 15
```

## iTake

```js
iTake(amount: number): (iterable: Iterable) => Iterator
```

Creates an iterator that yields a specified number of elements from the beginning of an iterable.

**Parameters:**

- `amount`: The number of elements to take.

**Returns:** A function that takes an iterable and returns an iterator yielding the specified number of elements.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
const takeThree = iTake(3)(numbers);
console.log([...takeThree]); // Output: [1, 2, 3]
```

## iTakeWhile

```js
iTakeWhile(predicate: (value: any) => boolean): (iterable: Iterable) => Iterator
```

Creates an iterator that yields elements from the beginning of an iterable while a predicate returns true.

**Parameters:**

- `predicate`: A function that returns true for elements to be taken.

**Returns:** A function that takes an iterable and returns an iterator yielding elements while the predicate is true.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5, 1, 2];
const takeLessThan4 = iTakeWhile(x => x < 4)(numbers);
console.log([...takeLessThan4]); // Output: [1, 2, 3]
```

## iTap

```js
iTap(fn: (value: any) => void): (iterable: Iterable) => Iterator
```

Creates an iterator that applies a side-effect function to each element of an iterable without modifying the elements.

**Parameters:**

- `fn`: A function to be called for each element.

**Returns:** A function that takes an iterable and returns an iterator applying the side-effect function.

**Example:**

```js
const numbers = [1, 2, 3];
const logged = iTap(console.log)(numbers);
[...logged]; // Logs: 1, 2, 3
```

## iToArray

```js
iToArray(iterable: Iterable): Array
```

Converts an iterable to an array.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** An array containing all elements from the iterable.

**Example:**

```js
const set = new Set([1, 2, 3]);
console.log(iToArray(set)); // Output: [1, 2, 3]
```

## iToSet

```js
iToSet(iterable: Iterable): Set
```

Converts an iterable to a Set.

**Parameters:**

- `iterable`: The input iterable.

**Returns:** A Set containing all unique elements from the iterable.

**Example:**

```js
const numbers = [1, 2, 2, 3, 3, 3];
console.log(iToSet(numbers)); // Output: Set(3) { 1, 2, 3 }
```

## iZip

```js
iZip(...iterables: Iterable[]): Iterator
```

Creates an iterator that yields arrays of elements from multiple iterables, pairing them by index.

**Parameters:**

- `...iterables`: The input iterables to be zipped.

**Returns:** An iterator yielding arrays of elements from the input iterables.

**Example:**

```js
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
const zipped = iZip(numbers, letters);
console.log([...zipped]); // Output: [[1, 'a'], [2, 'b'], [3, 'c']]
```
