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

**Single responsibility principle**
The aims of the SRP are to arrive at code that is highly cohesive (связан). Cohesiveness is when an
abstraction's parts are all functionally united in some way, where they can all be said to
work together to fulfill the abstraction's purpose. A useful question about discerning
singular responsibility is: how many reasons does your abstraction's design have to change? \
The SRP is not only about creating abstractions that are simple to use and maintain, it also
allows us to write code that is more focused on its key purpose.

**Open–closed principle**
When crafting abstractions, we should enable them to be open to extension so that other
developers can come along and build upon their behavior, adapting the abstraction to suit
their needs. If a module or function does not behave as we require it to, it would
be ideal for us to be able to adapt it to our needs without having to modify it or create our
own alternative.
We should have the ability to inherit the behavior, or to pass some extendable config to method. 

**Liskov substitution principle**
The Liskov substitution principle states that types should be able to be replaced by their
subtypes without altering the reliability of the program.
