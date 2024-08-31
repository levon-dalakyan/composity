# Lenses in Composity

## Introduction

Composity provides a powerful set of lens functions that allow you to work with complex, nested data structures in a functional and immutable way. Lenses provide a way to focus on a specific part of a larger data structure, allowing you to view, set, or modify that part without affecting the rest of the structure.

Lenses in Composity adhere to the principles of functional programming, ensuring immutability and composability. They are particularly useful when working with deeply nested objects or when you need to perform operations on specific parts of your data.

## Table of Contents

1. [lCompose](#lcompose)
2. [lGetPath](#lgetpath)
3. [lIndex](#lindex)
4. [lLens](#llens)
5. [lModifyPath](#lmodifypath)
6. [lOver](#lover)
7. [lPath](#lpath)
8. [lProp](#lprop)
9. [lSet](#lset)
10. [lSetPath](#lsetpath)
11. [lView](#lview)

## lCompose

```js
lCompose(...lenses: Object[]): Object
```

Composes multiple lenses into a single lens.

**Parameters:**

-   `...lenses`: The lenses to compose.

**Returns:** A new lens that is the composition of all input lenses.

**Example:**

```js
const personLens = lProp("person");
const nameLens = lProp("name");
const personNameLens = lCompose(personLens, nameLens);

const data = { person: { name: "Alice", age: 30 } };
console.log(lView(personNameLens, data)); // Output: 'Alice'
```

## lGetPath

```js
lGetPath(obj: Object, pathArray: Array): any
```

Retrieves the value at a specified path in an object.

**Parameters:**

-   `obj`: The object to retrieve the value from.

-   `pathArray`: An array representing the path to the desired value.

**Returns:** The value at the specified path.

**Example:**

```js
const data = { user: { profile: { name: "Bob" } } };
console.log(lGetPath(data, ["user", "profile", "name"])); // Output: 'Bob'
```

## lIndex

```js
lIndex(index: number): Object
```

Creates a lens for accessing an element at a specific index in an array.

**Parameters:**

-   `index`: The index to focus on.

**Returns:** A lens for the specified index.

**Example:**

```js
const data = ["a", "b", "c"];
const secondElementLens = lIndex(1);
console.log(lView(secondElementLens, data)); // Output: 'b'
console.log(lSet(secondElementLens, "x", data)); // Output: ['a', 'x', 'c']
```

## lLens

```js
lLens(getter: Function, setter: Function): Object
```

Creates a lens with the given getter and setter functions.

**Parameters:**

-   `getter`: Function to get a value from an object.

-   `setter`: Function to set a value in an object.

**Returns:** A lens object with getter and setter properties.

**Example:**

```js
const upperCaseLens = lLens(
    (str) => str.toUpperCase(),
    (value, str) => value
);
console.log(lView(upperCaseLens, "hello")); // Output: 'HELLO'
console.log(lSet(upperCaseLens, "WORLD", "hello")); // Output: 'WORLD'
```

## lModifyPath

```js
lModifyPath(obj: Object, pathArray: Array, modifier: Function): Object
```

Modifies a value at a specified path in an object using a modifier function.

**Parameters:**

-   `obj`: The object to modify.

-   `pathArray`: An array representing the path to the value to modify.

-   `modifier`: A function that takes the current value and returns the new value.

**Returns:** A new object with the modified value.

**Example:**

```js
const data = { user: { score: 10 } };
const result = lModifyPath(data, ["user", "score"], (score) => score * 2);
console.log(result); // Output: { user: { score: 20 } }
```

## lOver

```js
lOver(lens: Object, modifier: Function, obj: Object): Object
```

Applies a modifier function to a value focused by a lens.

**Parameters:**

-   `lens`: The lens to use.

-   `modifier`: A function that takes the current value and returns the new value.

-   `obj`: The object to modify.

**Returns:** A new object with the modified value.

**Example:**

```js
const data = { count: 5 };
const countLens = lProp("count");
const result = lOver(countLens, (x) => x + 1, data);
console.log(result); // Output: { count: 6 }
```

## lPath

```js
lPath(...props: (string|number)[]): Object
```

Creates a lens for a nested path in an object.

**Parameters:**

-   `...props`: The properties or indices that make up the path.

**Returns:** A lens for the specified path.

**Example:**

```js
const data = { user: { friends: ["Alice", "Bob"] } };
const firstFriendLens = lPath("user", "friends", 0);
console.log(lView(firstFriendLens, data)); // Output: 'Alice'
console.log(lSet(firstFriendLens, "Charlie", data));
// Output: { user: { friends: ['Charlie', 'Bob'] } }
```

## lProp

```js
lProp(prop: string): Object
```

Creates a lens for a specific property of an object.

**Parameters:**

-   `prop`: The name of the property to focus on.

**Returns:** A lens for the specified property.

**Example:**

```js
const data = { name: "Alice", age: 30 };
const nameLens = lProp("name");
console.log(lView(nameLens, data)); // Output: 'Alice'
console.log(lSet(nameLens, "Bob", data)); // Output: { name: 'Bob', age: 30 }
```

## lSet

```js
lSet(lens: Object, value: any, obj: Object): Object
```

Sets a value focused by a lens.

**Parameters:**

-   `lens`: The lens to use.

-   `value`: The new value to set.

-   `obj`: The object to modify.

**Returns:** A new object with the updated value.

**Example:**

```js
const data = { count: 5 };
const countLens = lProp("count");
const result = lSet(countLens, 10, data);
console.log(result); // Output: { count: 10 }
```

## lSetPath

```js
lSetPath(obj: Object, pathArray: Array, value: any): Object
```

Sets a value at a specified path in an object.

**Parameters:**

-   `obj`: The object to modify.

-   `pathArray`: An array representing the path to set the value at.

-   `value`: The value to set.

**Returns:** A new object with the updated value.

**Example:**

```js
const data = { user: { profile: { name: "Alice" } } };
const result = lSetPath(data, ["user", "profile", "name"], "Bob");
console.log(result); // Output: { user: { profile: { name: 'Bob' } } }
```

## lView

```js
lView(lens: Object, obj: Object): any
```

Retrieves a value focused by a lens.

**Parameters:**

-   `lens`: The lens to use.

-   `obj`: The object to retrieve the value from.

**Returns:** The value focused by the lens.

**Example:**

```js
const data = { count: 5 };
const countLens = lProp("count");
console.log(lView(countLens, data)); // Output: 5
```
