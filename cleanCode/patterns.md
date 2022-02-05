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
#### MVC
 - The Model: This describes the data and how business logic mutates that data. 
Changes in the data will manifest in changes to the View. 
 - The View: This describes how the Model is rendered (its format, layout, and appearance) and will invoke the 
Controller whenever there is an action that needs to occur, possibly in response to a user event.
 - The Controller: This accepts instructions from the View and informs the Model what actions or changes to carry out
which will go on to affect whatever is rendered to the user via the View.

It prescribes where we should put logic about business decisions (that is, in Models) and where we should put logic
about displaying things to the user (that is, Views). Additionally, it gives us the Controller, which enables these
two concerns to talk to each other. The separation that MVC fosters is hugely beneficial as it means our fellow
programmers can easily discern where to make required changes or fixes.
