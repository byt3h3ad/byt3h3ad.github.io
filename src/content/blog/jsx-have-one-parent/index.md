---
title: "Why JSX Can Have Only One Parent Element?"
description: "A simple question yet most React newbies don't know"
date: "Mar 18 2024"
---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710444621789/e3ae4fc7-6ae1-402d-871c-a741f3748d2e.png)

I am sure every one of us have come across this error at least once in our development journey. Or this error:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710446799912/48d3baa7-b786-491c-a94b-468b532e464f.png)

Have you ever wondered why `JSX expressions must have one parent element`? Let's find out.

JSX stands for JavaScript XML. It is an extension of JavaScript that allows developers to use HTML-like syntax in JavaScript code. This extension makes the composition of components easier to read as it looks like an HTML code made up of HTML elements and React elements. JSX is a syntactic sugar for `React.createElement`, which is a function that takes three arguments: the tag, the props, and the children. JSX is compiled back to normal JavaScript, which the browser understands.

So for example:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710451624669/0d7aef72-ee02-456b-a71e-9042fc0fea97.png)

If you have a nested element, the children will be an array of `React.createElement`.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710452140130/e736c427-4529-4d07-b8a8-b95759a91e8f.png)

So what happens when we have multiple elements is that we have multiple return statements:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710479946108/9490c27f-460b-444e-9fb2-1749c01b75c3.png)

We're trying to return two things at a time, but this is not valid JavaScript. We cannot return two items at a time. So, we can only return one parent, and that parent can have as many children and grandchildren as it wants.

## Solution

- ### Add a parent div
  Wrapping the elements in a parent element will solve the problem.
  ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710782555929/9d7d2fcd-bd04-485d-87be-abb12ab1bdc2.png)
  However, an extra div appears here which might be unnecessary.
- ### Use React.fragment
  `React.Fragment` is a component that doesn't render anything in the DOM tree.
  ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1710783616570/5060dbfb-7700-444f-9b1e-2cc837741429.png)
  `<>` and `</>` is the shorthand for `React.Fragment`.

If you want to play around with a transpiler, Babel has a nice [playground](https://babeljs.io/repl) to try out things.

So as we can see JSX is not really a requirement for using React. It just really simplifies things and gives a better developer experience.

Docs: [https://legacy.reactjs.org/docs/react-without-jsx.html](https://legacy.reactjs.org/docs/react-without-jsx.html)
