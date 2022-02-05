## Design patterns

Design patterns are the useful structures, styles, and stencils _(шаблоны)_ that our code sits within. A design pattern
may prescribe anything from the overall scaffolding of a code base to the individual syntactic pieces used to build 
expressions, functions, and modules.

### The perspective of a designer
Let's say we must construct an abstraction that allows users to give us two strings, a subject and a query.
We must then calculate a count of how many strings query found within the subject.

For the starters, we won't worry about our implementation, we will instead only consider the interface, as it is
primarily the interface to our code that will drive our fellow programmers' experiences.

The very first thing we may do as a designer is to define a function with a carefully chosen name and a specific
set of named arguments:
```js
function countQueryInDataString(query, dataString) { }
function countOccurancesInContent(countQuery, content) { }
function getOccurancesNumber(query, str) { }
```
So even for simple function, there can be a ton of namings and implementations, maybe create a function, class, or 
modify the `String` class itself. <br>
To solve this there is need for a *decision process*. And this process is **software design**. <br>
Effective software design employs design patterns to encapsulate problem domains and provide familiarity and ease
of comprehension to fellow programmers.

A well-chosen design pattern, given any problem domain, can be said to have two basic characteristics:
1. It solves the problem well.
2. It is familiar and usable.

Using design patterns well can have beneficial effects on all the tenets of clean code we covered previously
reliability (proved, known solutions), efficiency (modules work interoperate in known, understandable way),
maintainability (easy to maintain and change), and usability (easy to work with and understand).

### Architectural design patterns
