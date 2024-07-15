---
title: "The Curious Case of 257"
description: "The mysterious ways of a certain programming language"
date: "Jan 09 2023"
---

Python has an interesting caching feature, which I discovered recently -

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406988128/3e29eed7-4954-4320-96fc-7bc4ba95ddfc.png)

This is called small integer caching.

What Python does is pre-allocate a global list of integers as singletons in the range [-5, 256] during initialisation. So every time that an integer is created in this range, instead of creating a new object, a reference to the existing object is returned. Therefore it saves a lot of space and computation for commonly used integers.

This can also be seen during computations.

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406990923/ba3061b0-f97e-4495-80f3-0574e04962ef.png)

Another interesting byte. When initialised in the same line, the interpreter creates a new object for the first variable, and then reference the second variable with the same object. This is because the compiler can see both the variables and can optimise the referencing.

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406992890/dea88de5-c0d5-48c0-88bc-1f3a81a56e76.png)

Hey wait! I am not done yet.

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406994828/9062515d-3e8a-4fae-8f3f-bd4a216a7916.png)

Another new confusing thing?

The compiler also optimises identical literals, when the code is compiled in the same code object. So, 1. If the Python compiler can see the whole code, more optimisations may apply to the code. When typing into the Python shell each line is a completely different statement, parsed, and compiled separately.

This works for floats as well, which is not cached.

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406996379/fa0ae364-2304-447a-8454-8af505943d8b.png)

Literals inside tuples and other data structures are shared as well.

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1684406998123/c8cefa8b-0556-4733-a259-d601a548bbf3.png)

Java uses a similar approach and caches the integers between -128 to 127. However this works only on autoboxing. They’re not cached if built with the constructor.

References -

[Why Python is Slow: Looking Under the Hood](http://jakevdp.github.io/blog/2014/05/09/why-python-is-slow/)

[Python internals: Arbitrary-precision integer implementation](https://rushter.com/blog/python-integer-implementation/)

[What's with the integer cache maintained by the interpreter?](https://stackoverflow.com/a/15172182)
