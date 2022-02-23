# Design patterns

Design patterns are the useful structures, styles, and stencils _(шаблоны)_ that our code sits within. A design pattern
may prescribe anything from the overall scaffolding of a code base to the individual syntactic pieces used to build 
expressions, functions, and modules.

## The perspective of a designer
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

## Architectural design patterns
### MVC
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

### MVVM
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

### JavaScript modules
#### Modular design patterns

##### Constructor pattern
Uses a singular constructor and then manually fills its prototype with methods and properties.
This was the traditional approach for creating classical OOP like classes in JavaScript before the class definition
syntax existed. So this could be substituted with `class` in JS <br>
If you're not sure whether the Constructor pattern is applicable, consider whether the following questions are true:
 - Is the concept expressible as a noun?
 - Does the concept require construction?
 - Will the concept vary between instances?

##### The Class pattern
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

**Mixing-in classes** <br>
JavaScript provides no native mixing-in mechanism so to achieve it you, either need to augment the prototype after the
definition or effectively inherit from your mixins (as if they are superclasses). <br>
Augmenting a prototype with your mixins is the simplest approach. We can achieve this by specifying mixins as objects
and then adding them to prototype of a class via a convenient method such as Object.assign:
```js
const fooMixin = { foo() {} };
const bazMixin = { baz() {} };
class MyClass {}
Object.assign(MyClass.prototype, fooMixin, bazMixin);
```
This approach, however, does not allow MyClass to override its own mixin methods. <br>
Instead of directly mixing-in methods to an existing prototype object, we can use inheritance. This can most easily be
achieved by so-called *Subclass Factories*.
```js
const fooSubclassFactory = SuperClass => {
  return class extends SuperClass {
    fooMethod1() {}
    fooMethod2() {}
  };
};
```
Or to use more flexible approach:
```js
function mixin(...mixins) {
  return mixins.reduce((BaseClass, mixinFunction) => {
    return mixinFunction(base);
  }, Object);
}

const alpha = Super => class extends Super { alphaMethod() {} };
const bravo = Super => class extends Super { braveMethod() {} };

class MyClass extends mixin(alpha, bravo) {
  alphaMethod() { console.log('rewrited alphaMethod') }
};
```
The mixin mechanism you should use probably depend on the exact characteristics you're seeking. In this section, we've
seen two examples: one where we compose methods into a singular [[Prototype]] via Object.assign(), and another where we
create a tree of inheritance (that is, a chain of [[Prototypes]]) to represent our mixin hierarchy.

##### The Prototype pattern
The Prototype pattern involves using plain objects to act as templates for other objects. The Prototype pattern extends
this template object directly without fussing with instantiation via `new` or `Constructor.prototype` objects. You can
think of it as similar to conventional constructor or Class patterns minus the constructor. <br>
Typically, you'll first create an object to act as your template. This will have all of the methods and properties
associated with your abstraction.
```js
/* functionality that you'd like to inherit */
const inputComponent = {
  type: 'input',
  render() { return document.createElement('input'); },
  /* inherent or even like this */
  extend() { return Object.create(this); }
};

/* inhereting */
const inputA = Object.create(inputComponent);

/* rewriting the methods */
const numericalInputComponent = Object.assign(inputComponent.extend(), {
  render() {
    const input = InputComponent.render.call(this);
    input.type = 'number';
    return input;
  }
});
```
The Prototype pattern is most useful in scenarios where you have an abstraction that will have varying characteristics
between instances (or extensions) but does not require construction. At its core, the Prototype pattern really only
refers to the extension mechanism (that is, via Object.create), so it can equally be used in any scenario where
you have objects that may semantically relate to other objects via inheritance. <br>
The Prototype pattern is useful in that it provides a simple and explicit mechanism of inheritance that can result in less clunky code (although, equally, if misapplied, can lead to more complexity).

##### The Revealing Module pattern
The Revealing Module pattern is a pattern used to encapsulate some private logic and then expose a public API. There are
a few adaptations of this pattern, but usually it is expressed via an Immediately Invoked Function Expression (IIFE)
that returns an object literal containing the public methods and properties. <br>
The Revealing Module pattern is especially useful in scenarios where you need to have a delineation between private and
public, where you have specific initialization logic, and where, for whatever reason, your abstraction does not suit
more object-oriented patterns (Class or Constructor patterns).

##### The Conventional Module pattern
The Conventional Module pattern is usually expressed as a plain object literal with a set of methods.
```js
const timeDiffUtility = {
  setConfig(conf) { this.config = conf },
  minutesBetween(dateA, dateB) {}
};
```
It's quite typical for such a module to also reveal specific initialization methods such as initialize, init, or setup.
Alternatively, we may want to provide methods that change the state or configuration of the entire module. <br>
The Conventional Module pattern is useful in any scenario where you simply wish to wrap up a set of related methods or
properties into something with a common name.

##### The Singleton Class pattern
Common use cases of singletons include Utilities, Logging, Caching, Global Event Buses, and so on.

**Why it is antipattern:**
It is overused, introduces unnecessary restrictions in situations where a sole instance of a class is not
actually required, and introduces global state into an application, the same as global variable. <br>
Makes code more complex, less useful, and a real pain to re-use or test. Where you need a single instance - make a 
factory that returns one instance at the time, this won't violate SRP.

### Planning and harmony
When you develop something keep in mind:
**Expect change and adaptation**: Every software project will involve change at some point. If we are forward-thinking
in our architectural and modular designs, then we will be able to limit this future pain, but never begin a project
thinking that you will create the One True Solution. Instead, iterate, question your judgment, and then iterate again.
**Consult with other programmers**: Talk to the stakeholders who will have to make use of your code. That may be fellow
programmers on your team or other programmers who'll be making use of the interfaces that you're providing. Field 
opinions and data and then make an informed decision.
**Avoid cargo culting and ego**: Be aware of cargo culting and your ego and how, if we're not careful, we can blindly
inherit ways of doing things without crucially considering their suitability, or we can be trapped by our egos: thinking
that one specific design or methodology is perfect just because it's the one we personally know and love.
**Bias toward harmony and consistency**: When designing an architecture, above all, seek harmony. There is always the
possibility of many individually tailored parts of a code base, but too many internal differences can confuse 
maintainers and lead to a code base of splintered quality and reliability.

# Real-World Challenges
**Progressive enhancement** is a principle that espouses the importance of functionality that is resilient to 
environmental constraints. It tells us that we should try to provide all users with as much functionality as their
environment allows. It is often conceptually paired with **graceful degradation**, which is the ability for a piece of 
software to maintain limited functionality even when its dependencies are unmet or only partially met (for example, a
client-side validated <form> that is submittable even on browsers without JavaScript support is said to gracefully
degrade).

### SPA
- Architecture (DX): There is a nicer separation of concerns between the frontend client and the backend API layer.
This can lead to a cleaner architecture that helpfully delineates business logic from UI. Having one code base that 
governs both the rendering and dynamic enhancement can vastly simplify things as well. 
- State persistence (UX): Users can navigate and execute actions within a web application without having to lose in-page
state, such as populated input fields or scroll-position. Additionally, the UX can include multiple different panes,
modals, or sections that populate independently and can be persisted regardless of other actions taken.
- Performance (UX): The bulk of HTTP resources can be loaded just once within the user's browser, increasing the 
performance of any further actions or navigations within the application. That is, after the initial load of the 
application, any further requests can be optimized to be simple JSON REST responses with no unnecessary boilerplate
markup so the browser spends less time re-parsing or re-rendering boilerplate HTML, CSS, and JavaScript.

##### DOM binding and reconciliation problem
The challenge in manually fiddling with the DOM ourselves is that it doesn't scale very well without some kind of 
abstraction. It is easy enough to take a piece of data and derive a DOM tree from that data, but having the DOM tree
tied to changes within the data and having the data tied to user-derived changes in the DOM (for example, clicking on
buttons) are quite burdensome things to implement.

React's approach: <br>
When someone changes the element state:
1. React re-invokes the component (re-renders)
2. React compares the tree returned from the re-render with the previous tree
3. React makes the essential granular mutations to the live DOM for all of the changes to be reflected
   
##### Messaging and data propagation
There are a couple of paradigms we can use here:
- Event-oriented: This means having specific global events that can be emitted and listened to (for example,
userProfileNameChange). Any component or view within a page can then bind to this event and react accordingly by 
updating its content. The state, therefore, exists at the same time in many different areas (amongst various components 
or views).
- State-oriented: This means having a global state object that contains the single source of truth for the user's 
forename. This state object, or parts of it, can be recursively passed down through a component tree, meaning that, 
upon any change, the entire component tree is fed with the new state. The state is therefore centralized yet propagated
whenever a change occurs.

The crucial thing that differs is how the change, in this case, a mutation of the forename, is communicated throughout 
the application and where the data resides at any one time: 
- The event-oriented paradigm has data living in several places at once. So, if, for whatever reason, one of those
places fails to bind to the mutation of that event, then you can end up with out-of-sync data representations.
- The state-oriented paradigm only has one canonical representation of the data and effectively pipes it to the
relevant views or components, so that they are always hydrated with the latest version.

##### Bundling and serving
There are several specific build tools, such as Grunt, gulp.js, webpack, and Browserify.
Bundling utilities will usually output a file with a hash of the file's content as part of the filename. This filename
can then be dynamically or statically inserted into a <script> tag within your HTML to be served to the browser.
Having a hash of the file's contents in the filename ensures that browsers always load the updated file and do not
rely on a previously cached version of it. These files are usually minified as well. This is used in combination with 
HTTP compression techniques (such as .gzip) to ensure that the transmission over HTTP from a server to a client is as
small and quick as possible. Usually, you will have distinct development and production builds since some build
steps, such as minification, would make development (and debugging!) harder.

Serving bundled JavaScript to the browser is usually done with a singular <script> tag referencing the bundled
JavaScript filename, placed at somewhere within the HTML that you serve to the browser.
There are several important performance considerations when selecting an approach. The most important metric is 
how quickly, from the time of the initial request, a user can start using the application. <br>
When loading up superWebApp.example.com, we can imagine the following possible latencies experienced
by the user:
 - Fetching resources: Each resource fetch may involve a DNS lookup, an SSL handshake, and the completion of an HTTP 
request and response cycle. Responses are usually streamed, meaning that the browser may begin parsing a response
before it is completed. Browsers typically make a moderate amount of requests concurrently.
 - Parsing HTML: This involves the browser parsing every tag name and iteratively building up a DOM representation of
the HTML. Some encountered tags will cause a new fetchable resource to be enqueued, such as <img src>, <script src>,
or <link type="stylesheet" href>. 
 - Parsing CSS: This involves the browser parsing every ruleset within any fetched CSS. Referenced resources such as
background images will only be fetched later if the corresponding element is found to exist on the page.
 - Parsing / compiling JavaScript: Following the fetching of each JavaScript resource, its contents will be parsed and
compiled, ready to execute. 
Rendering HTML with CSS applied: This will ideally occur only once, when all CSS has been loaded. If there are
asynchronously loaded CSS or other aesthetic resources (such as typefaces or images), then there may be several
repaints/rerenders before the page can be considered fully rendered.
 - Executing JavaScript: Depending on the location of the corresponding <script>, a piece of JavaScript will execute and 
may then mutate the DOM or perform its own fetches. This can potentially block any other fetching/parsing/rendering
from occurring.
   
It's usually preferable to have the execution of your JavaScript occur last, when the browser has done everything else.
However, this is not always ideal. Placement of your primary bundled <script> (your main code base) is vital in 
determining when your JavaScript will be fetched, when it will execute, and what the state of the DOM will be when it
executes. <br>
Here's a rundown of the most popular <script> placements and their respective advantages:
- <script src> within <head>: This script will be fetched as soon as <script> is encountered during parsing.
Fetching and execution will occur in serial order and will **block other parsing from occurring.**
This is considered a bad practice as it needlessly blocks the continued parsing of the rest of the
document (and hence increases the latency of the page load, from the user's perspective).
- <script src> at the end of <body>: This script will be fetched as soon as <script> is encountered during parsing.
Fetching and execution will occur in serial and will **block other parsing** from occurring. Usually, parsing can be
considered mostly complete as <script> **is the very last thing** in <body>. 
- <script src defer> within <head>: _Most preferable option_. This script will be enqueued for fetching as soon as <script> 
is encountered during parsing, and this fetch will occur concurrently with the parsing of the HTML at a time that is
convenient for the browser. **The script will only execute once the entire document is parsed.** 
- <script src async> within <head>: This script will be enqueued for fetching as soon as <script> is encountered during
parsing, and this fetch will occur concurrently with the parsing of the HTML at a time that is convenient for the
browser. The execution of the script **will occur immediately following its fetch and will block** continued parsing.


#### Security
