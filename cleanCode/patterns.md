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
 - The Model: This describes the data and how business logic mutates that data. Changes in the data will manifest in
changes to the View. 
 - The View: This describes how the Model is rendered (its format, layout, and appearance) and will invoke the 
Controller whenever there is an action that needs to occur, possibly in response to a user event.
 - The Controller: This accepts instructions from the View and informs the Model what actions or changes to carry out
which will go on to affect whatever is rendered to the user via the View.

It prescribes where we should put logic about business decisions (that is, in Models) and where we should put logic
about displaying things to the user (that is, Views). Additionally, it gives us the Controller, which enables these
two concerns to talk to each other. The separation that MVC fosters is hugely beneficial as it means our fellow
programmers can easily discern where to make required changes or fixes.

#### MVVM
MVVM is similar in spirit to its ancestor, MVC. It prescribes a strict separation between the underlying business logic
and data that drives a program and the rendering of that data:
- The Model: This describes the data and how business logic mutates that data. Changes in the data will manifest in
changes to the View.
- The View: This describes how the Model is rendered (its structure, layout, and appearance) and will invoke the
Data Binding mechanism of the ViewModel whenever there is an action that needs to occur, possibly in response to a
user event.
- The ViewModel: This is the glue between the Model and the View and enables them to talk to each other via a Data
Binding mechanism. This mechanism tends to vary a lot between implementations.

The MVVM architecture is more popular in frontend JavaScript as it suits the need of having a constantly updated View,
while traditional MVC is more popular on the backend as it caters well to the simple render-once nature of most HTTP
responses. <br>
Many frameworks will have their own adaptation of data-binding. Angular, for example, allows you to specify in your
HTML templates a custom attribute called ng-model, which will tie a user input element such as <input> to a given data 
model, allowing data to flow in both directions. If the Model is updated, <input> will be updated to reflect that and
vice versa.

#### JavaScript modules
##### Modular design patterns

The **Constructor pattern**
Uses a singular constructor and then manually fills its prototype with methods and properties.
This was the traditional approach for creating classical OOP like classes in JavaScript before the class definition
syntax existed. So this could be substituted with `class` in JS <br>
If you're not sure whether the Constructor pattern is applicable, consider whether the following questions are true:
 - Is the concept expressible as a noun?
 - Does the concept require construction?
 - Will the concept vary between instances?

The **Class** pattern
The Class pattern, which relies on the newer class definition syntax, has largely replaced the Constructor pattern.
It involves the creation of classes, analogous to classical OOP languages, although behind the scenes it uses the
same prototypal mechanism that the Constructor pattern uses.
```js
class Name {
  constructor(forename, surname) {
    this.forename = forename;
    this.surname = surname;
  }
  sayHello() {
    return `My name is ${this.forename} ${this.surname}`;
  }
}
/* above is a sugar around below */
function Name(forename, surname) {
  this.forename = forename;
  this.surname = surname;
}
Name.prototype.sayHello = function() {
  return `My name is ${this.forename} ${this.surname}`;
};
```

The Class pattern, much like the Constructor pattern, is useful when you have a self-contained concept that fulfills
the following criteria:
- The concept is expressible as a noun
- The concept requires construction
- The concept will vary between instances of itself

**Static methods** <br>
Static methods are useful when you have a method or property whose functionality and existence are semantically
related to the entire class as opposed to a singular instance.

