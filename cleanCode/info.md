*Model of a problem* \
A model or *conceptual model* is a schematic or representation that describes how something works.
We create and adapt models all the time without realizing it. Over time, as you gain more information about a problem
domain, your model will improve to better match reality.

Tower of abstractions - the lower abstraction - complexity is increasing.

## Writing code for humans
When we write code, it's essential to consider how human brains will consume it, using meaningful abstractions. \
Rely on main topics:
 - Reliability (quality of being correct, stable, and resilient);
   - correct - code which match to a set of expectations and requirements (which we should define);
   - stable - correct behavior given different valid inputs, situations, conditions (which we should define);
   - resilient - fault tolerance, code behavior if unexpected or nonroutine inputs; 
 - Efficiency
   - time - optimize the amount of time, or CPU cycles, spent on any given task;
   - space - space your code takes in RAM (connected with time);
 - Maintainability (ease with appropriate changes)
   - adaptability (ability of your code to adapt to different, appropriate needs and environments, cannot be infinite);
     - non-fragility - if you change one module - other shouldn't break;  
     - non-rigidity (interdependencies) - if you change one module - you shouldn't rewrite a lot of other modules;
   - familiarity (stick to common design patterns, syntax, naming);
 - Usability (code should provide a way for user to achieve their goals with minimal hassle, time, and cognitive effort);

Requirements can be put in User stories. As a {persona}, I want to {want}, so that {purpose}...

Accessibility - be aware of the Web Content Accessibility Guidelines (WCAG 2.0).

The Enemies of Clean Code:
  - JavaScript (too many users with too many requirements and too many opinions);
  – Management:
    - Pressure to ship (when occurs documentation, architecture, consistency, testing, best practices begin degradation)
    The solution to this is a crucial compromise between time to ship and technical debt (refactor, bugfix, testadding).
    - Bad metrics (metrics are badly setup or showing not full picture of effort);
    - Lack of ownership (codebase without stakeholders);
  - Self (take care of your ego and measure your abilities)
  - The cargo cult (copying patterns and behaviors without fully understanding their true purpose and functionality);

## SOLID and Other Principles

### The Law of Demeter
LoD, or the principle of least knowledge. This so-called law has three core ideas:
 - A unit should have only limited knowledge about other units;
 - A unit should only talk to its immediate friends;
 - A unit should not talk to strangers;

### SOLID

**Single responsibility principle** \
The aims of the SRP are to arrive at code that is highly cohesive (связан). Cohesiveness is when an
abstraction's parts are all functionally united in some way, where they can all be said to
work together to fulfill the abstraction's purpose. A useful question about discerning
singular responsibility is: how many reasons does your abstraction's design have to change? \
The SRP is not only about creating abstractions that are simple to use and maintain, it also
allows us to write code that is more focused on its key purpose.

**Open–closed principle** \
When crafting abstractions, we should enable them to be open to extension so that other
developers can come along and build upon their behavior, adapting the abstraction to suit
their needs. If a module or function does not behave as we require it to, it would
be ideal for us to be able to adapt it to our needs without having to modify it or create our
own alternative.
We should have the ability to inherit the behavior, or to pass some extendable config to method. 

**Liskov substitution principle** \
The Liskov substitution principle states that types should be able to be replaced by their
subtypes without altering the reliability of the program.

**Interface segregation principle** \
The interface segregation principle is concerned with keeping interfaces highly cohesive,
engaged in only one task or a set of tasks that are highly related. It states that no client
should be forced to depend on methods that it does not use.

**Dependency inversion principle** \
 - High-level modules should not depend on low-level modules. Both should  depend on abstractions 
(that is, interfaces); 
 - Abstractions should not depend on details. Details (such as concrete implementations) should
depend on abstractions;

Our abstractions should be separated (decoupled) in such a way that we can easily change low-level
implementation details at a later date without having to refactor all of our code.
The dependency inversion principle, in its second point, suggests that we do this via intermediary
abstractions through which the high-level modules can interface with the low level details.
These intermediary abstractions are sometimes known as adapters, as they adapt a low-level
abstraction for consumption by a high-level abstraction.
As we design and build abstractions, it's useful to create a dependency graph. They are a useful
way to explore the true complexity of your code, and can often highlight areas of possible
improvement. Most importantly, they let us observe where, if anywhere, our low-level implementations
(details) impact our high-level abstractions.

**The abstraction principle** \
The principle of abstraction - *Implementation should be separate from interface.* \
An implementation is the complex underside of an abstraction. The interface is the simplified topside.
That is why we say that abstraction is a simplified lever to hidden complexity.

To separate implementation from interface to just the right degree, you have some rules:
 - Don't repeat yourself (**DRY**): avoid writing code that duplicates. If you find yourself having to repeat yourself,
then this indicates that you've failed to abstract something, or have under-abstracted something.
 - You aren't gonna need it (**YAGNI**): Also known as keep it simple, stupid! (**KISS**), this warning tells us
to be wary of over-abstracting code that does not need to be abstracted. It's the polar opposite of DRY, and serves to
remind us that we should not attempt abstraction unless it's warranted (if we start to repeat ourselves, perhaps).

Between these two warnings, somewhere in the middle, lies the perfect abstraction.

Over-abstraction is when too much complexity has been removed or replaced, so that the underlying complexity becomes
difficult to leverage, and confuses the user of the code. But also keep in mind that the appropriate level of
abstraction is contextdependent. What may be over-abstracted for your use case may be underabstracted for another.

So to not create under- and over-abstraction, but a balanced abstraction we must have very good understanding of
both the problem domain and the user's capabilities and intents, analize the requirements to the functionality and
build abstractions there.

### Functional programming principles
**Functional purity** - when their return value is only derived from their input values (also called idempotence),
and when there are no side-effects. These characteristics give us the following benefits:
 - Predictability: If a function mutates a state that it does not own, potentially creating cascades of changes in 
other areas of the code.
 - Testability: returning the same result when given the same inputs, is very easy to verify. An idempotent function
may still have side-effects, so it may not always be a pure function, but from the perspective of an abstraction
user, idempotence is highly desirable

**Immutability** - Immutability refers to the simple idea that data should not mutate. This means that, when we initialize
an object, for example, we should not add new properties to it or change existing properties over time. Instead, we
should derive a brand new object and only make changes to our own copy. `const` is JS.

Knowing that something is immutable means that we can rest assured that it will not change; we can rely on its
characteristics without worrying that some other part of the program may change it without us knowing.

### Naming
To come up with good name you should stick with some principles:

**Purpose** - name indicates what something is for and how it behaves. If a name requires a comment to explain its
purpose, then that is usually an indicator that it has not done its job as a name. \
The purpose of something is highly contextual and so will, therefore, be informed by the surrounding code and the area
of the codebase in which that name resides. This is why it's often okay to use a generic name as long as it is
surrounded by context that helps to inform its purpose.

```js
class TenancyAgreement {
// Option #1: too poor, can be missleaded
saveSignedDocument(id, timestamp) {}
// Option #2: perferfect
saveSignedDocument(documentId, documentTimestamp) {}
// Option #3: extra info 
saveSignedDocument(tenancyAgreementSignedDocumentID, tenancyAgreementSignedDocumentTimestamp) {}
}
```

**Concept** - Its core idea and how to think about it, how users should understand context and complexity of the 
functionality that I'm writing.

**Contract** - Expectations about how it works, indicates a contract with other parts of the surrounding abstraction.
Variable started with `is` expected to be a Boolean type, caps name - constants, etc.

Avoid exotic words in vars, kill instead of delete, etc. \
If the name became too long - it indicates that abstraction is not properly split. \

So most important characteristics of a name: purpose, concept, and contract. One of the easiest ways to
use these characteristics upon your names is to use *consistency* and *hierarchy* to your benefit. \
Consistency refers to using the same pattern of naming across many names within a given area of code. \
Hierarchy refers to the way we structure and put together different areas of code to form a
holistic (coupled) architecture. Make your hierarchy reflect your abstractions.

To show the type of var in dynamically types language like JS - we can use Hungarian notation.
Instead of button, we may use elButton or buttonElement \
Instead of age, we may use nAge or ageNumber \
Instead of details, we may use objDetails or detailsObject \
But of course we need to keep an eye about the changes in code that affects them, so better use it
when you are sure that it won't be frequent changes.

