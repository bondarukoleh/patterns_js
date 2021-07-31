### Model of a problem
A model or *conceptual model* is a schematic or representation that describes how something works.
We create and adapt models all the time without realizing it. Over time, as you gain more information about a problem
domain, your model will improve to better match reality.

## Writing code for humans
When we write code, it's essential to consider how human brains will consume it.

Readability. Meaningful abstractions.

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
