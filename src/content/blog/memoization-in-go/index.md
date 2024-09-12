---
title: "Implementing a Memoization Function"
description: "Writing a function to speed up other functions"
date: "13 Sept 2024"
---

Memoization and other performance optimization approaches are always interesting. And one of the best ways to deeply understand anything is by building from scratch.

A memoization function stores the results of function calls and returns the cached result when the same inputs occur. This speeds up the performance of our functions, and as a whole, our program.

The first call to the function will be a "cold" call. Every function call will be executed and the output values will be cached. Subsequent calls to the function will return the cached value.

Our `memoize` function will be able to take in a function as parameter and should return the memoized function.

```js
const memoize = (fn) => {
  return fn;
};

const memoizedFn = memoize(fn);
```

To implement the caching, `Map` will be used as a cache object. `Map`, for the uninitiated, is convinient for because it stores its data key-value pairs. The arguments will be used as a key, and the result of the function call will be stored as the value.

```js
const cache = new Map();

cache.set("1", 1);
cache.get("1"); // 1

cache.set("hello", world);
cache.get("hello"); // world
```

So every time we call the memoized function again, we can access the cache object before calling the function.

Now, the algorithm is pretty simple:

- get all the arguments and stringify them to build the key of the cache object

- verify if the key exists in the cache.
  - If it does
    - return the output value
  - if it doesn't
    - call the function
    - store the output value in the cache
    - return the output value

Converting this into code:

```js
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
```

Let's now test it by calculating the factorial of first 25 natural numbers.

```js
const factorial = (number) => {
  if (number < 0) return -1;
  if (number === 0) return 1;
  return number * factorial(number - 1);
};

const memoizedFactorial = memoize(factorial);

const testFactorial = (label, numbers, callback) => {
  console.time(label);
  for (let number of numbers) {
    callback(number);
  }
  console.timeEnd(label);
};

const numbers = Array.from({ length: 26 }, (_, i) => i);
testFactorial("cold", numbers, memoizedFactorial);
testFactorial("cached", numbers, memoizedFactorial);
```

Running this two times we get:

![](https://i.imgur.com/SxObuOV.png)

nice.
