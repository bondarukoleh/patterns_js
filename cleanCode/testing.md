# The Landscape of Testing
Tests, much like the rest of our code, deal in layers of abstraction and granularity. \
A good testing methodology will involve tests for all distinct parts of a code base:
- Prove fulfillment: Tests allow us to prove to ourselves and our stakeholders that expectations and requirements are
fulfilled.
- Have confidence: Tests allow us and our colleagues to have confidence in our code base—both that it works correctly 
and that it can accommodate changes without faults arising unbeknownst to us.
- Share knowledge: Tests allow us to share vital knowledge about how parts of our code operate together. In a sense, 
they are a form of documentation.

## Types of testing
The unit test enables us to test isolated parts, while the various combinations of parts can be tested via either
integration, functional, or E2E tests. <br>
A fully-tested system might involve unit tests for each individual step, integration tests for each pair of steps,
and functional or End-to-End (E2E) tests for every combination of steps that together form a user flow or user journey.

User Journey has **Start** points and **End** points. Each dot can be thought of as a single area of responsibility
or unit that is activated as part of these journeys. A unit test is only concerned with a single area of 
responsibility. The integration test is concerned with two (or more) neighboring areas that integrate.
And an E2E or functional test is concerned with all of the areas involved in a singular user journey.

### Unit testing
There are several benefits of testing individually-isolated units of code:
- Completeness: A given unit will typically have a small number of clearly defined requirements.
As such, it's easy to ensure that you're testing the full gamut of a unit's functionality.
- Reportability: When a given unit test fails, you can quite easily discern the exact nature.
- Comprehension: Unit tests are a useful and self-contained form of documentation for given modules
or functions.

There are, however, challenges that come unit-testing as well:
Mocking correctly, Testing realistic inputs, Testing true units and not combinations.

### Integration testing
- Get better coverage: Integration tests have one or more integrated modules as their test subject, and so by having 
such tests, we can increase our 'test coverage' throughout our code base.
- Clearly see faults: Emulating, at least in part, the integration of modules that we would see in production enables
us to see real integration faults and failures as they may naturally occur.
- Expose bad expectations: Integration tests allow us to challenge the assumptions we may have made when building
individual units of code.
  
Some challenges:
- Isolating integrations (avoiding big bang tests): When implementing integration tests, it is sometimes easier to 
avoid isolating individual integrations and instead just test a large part of the system with all of its integrations
intact. 
- Realistic integrations (for example, database server and client)

### E2E and functional testing
- Correctness and health: E2E tests give you a clear insight into the general health of a system.
- Realistic effects: Via E2E tests we can tryout more realistic circumstances, emulating our code run in the wild
- More holistic (as a one) view.

Challenges:
- Performance and time costs
- Realistic steps
- Complex tooling

## Writing Clean Tests
Possible range of scenarios is often called the __input space__ or __input domain__ of a given function or module.
We can consider something well-tested if we expose it to a representative variety of inputs from its input space.
It's not necessary to test every possibility. What's more important is to test a representative sample of them.

So, before we even begin writing code, we should always ensure that we know exactly what it is we're tasked with
creating. If we find ourselves unsure what the full __input space__ might be, that's a strong indicator that we should
take a step back, talk to stakeholders and users, and establish an exhaustive set of requirements.
This is a strong benefit of test-led implementation (TDD), where these deficits in requirements are spotted early
and can hence be resolved before costs are sunk into a pointless implementation.

## Tools for Cleaner Code
If we recall our original tenets of clean code (R.E.M.U) we can observe how various tools help us abide by them.
- Reliability: Testing tools, user feedback, error loggers, analytics, linters, static typing tools, and languages
- Efficiency: Performance measurement, analytics, user feedback, UX reviews, ecological costing (e.g. carbon footprint)
- Maintainability: Formatters, linters, documentation generators, automated builds, and continuous integration
- Usability: Analytics, user feedback, documentation generators, accessibility checkers, UX reviews, and hallway testing

Tools that inspire good habits work by augmenting our __feedback loops__. A feedback loop is whatever eventually makes you
realize that you need to make a change. Loops like:
- Editing -> linter -> compilation;
- Commiting -> linter -> compilation -> tests;
- Pushing to repo -> tests -> minify & bundle;
- Deployment -> tests -> error logs -> analytics -> User feedback -> QA / User testing

### Linters and formatters
A linter is a tool used to analyze code and discover bugs, syntax errors, stylistic inconsistencies, and suspicious
constructs. Popular linters for JavaScript include ESLint, JSLint, and JSHint.
ESLint also includes a facility for fixing a subset of these syntax errors via its --fix option.
Thankfully, though, there are a number of more advanced tools like formatters, such as Prettier and Standard JS,
will take our syntactic preferences and make active changes to our code to ensure that it remains consistent.

## Collaboration and Making Changes
### Clean documentation
The purpose of documentation is to communicate **what a piece of software does** and **how to use it**. \
We can split the characteristics of clean documentation into four aspects:
- a clean piece of documentation communicates the **concept** of the software;
- provides a **specification** of its behaviors
- contains instructions for how to perform specific actions
- does all of this with a focus on usability

#### Concept
A clean piece of documentation will communicate the underlying concept of the software. It'll do this by explaining what
the software's purpose is in a way that allows potential users to see how they might make use of it, how our software
can help the user. This can be considered the educational part of documentation: setting out the terminology and
paradigms that will allow the reader to easily comprehend the other parts of the documentation and the software it
describes. You'll hopefully notice how incredibly similar this is to the process of crafting clean code.
Writing good documentation is a process of considering the user and then crafting the appropriate abstractions for them.
- Determine your audience: Who are they and what's their general technical proficiency?
- Determine their understanding of the problem domain: How much do they already know about this specific code? 
- Determine the right the level of abstraction and best analogies: How can you communicate in a way that makes sense?

The entire purpose of the software we build is to abstract away complexity, wrapping it up in a neat and simplified way.

#### Specification
Detailing the specific characteristics and behaviors of the interfaces provided by your software.
- It's **literally in the code**: The specification of behavior is contained within the code and its tests, usually
making it quite simple to manually write up this information as documentation.
- It's **possible to automatically generate**.
- It follows a **fixed format**: A specification will follow a straightforward format that is simple to author. It
usually contains headings for individual endpoints or method signatures, and a sentence explaining each argument.

As you can hopefully tell, this specification is a purely technical explanation of a function's behavior.
Be wary of the following traps:
- Not enough information to allow usage: It's important to provide enough information about your implementation so that
another programmer, with no knowledge of your software, can begin to make use of it. It's insufficient to only
specify types of arguments, for example. Provide extra information if the knowledge domain is especially obscure.
- Incorrect or out-of-date information. This is why it's quite common to generate documentation automatically from
annotated code.
- Lack of examples: It's common to only list modules, methods, and argument signatures, without providing any examples.
If doing this, the chance of confusion and pain is far higher.

#### Instruction
