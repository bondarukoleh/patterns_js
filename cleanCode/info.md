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
