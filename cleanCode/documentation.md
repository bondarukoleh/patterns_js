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
A clean piece of documentation will instruct a user in how to accomplish common tasks. These are commonly termed
walkthroughs, tutorials, howtos, or recipes.

- Upfront expectations and prerequisites: specify what hardware, software environment, and capabilities, reader
  preparation before beginning.
- Specific steps that a reader can follow to reach teh result with code examples if possible.
- An achievable and observable goal.

Don't just tell a user what to do. Tell them what they're accomplishing at each stage, and why it matters. That is,
don't just tell me to put salt in the dish, tell me why it needs salt!

#### Usability
Usability is purely about the way in which we express that content.
There are many ways we can confuse:
- Too much content;
- Too little content;
- Internal inconsistency;
- Lacking structure;
- Difficult to navigate content;
- Lacking presentation.

#### Documentation is everywhere
- Written documentation (API specifications, conceptual explanations)
- Explanatory images and diagrams (for example flowcharts)
- Written tutorials (walk-throughs, recipes, how to do X)
- Rich media introductions and tutorials (videos, podcasts, screencasts)
- Public Q&As or issues (for example GitHub issues that explain how to fix something)
- Community-driven Q&As (for example StackOverflow)
- Independent communication between programmers (online or offline)
- Meet-ups, conferences, and seminars (owner or community-driven)
- Official support (paid support lines, emails, in-person sessions)
- Educational classes (in-person or online, for example Coursera)
- Tests (that explain concepts, flows, and expectations)
- Good abstractions (that help to explain concepts)
- Readable and familiar code (that can be easily understood)
- Structure and delineations (directory structure, project names, and so on)
- Intuitively designed interfaces (educating usage via good design)
- Error flows and messages (for example X not working? Try Z instead.)

#### Writing for non-technical audiences
- Pick the right level of abstraction: find a level of abstraction that is fully understood by the audience;
- Avoid overly-technical terminology: Use regular words for explanation, visual enhancements instead of CSS modifications.
- Get constant feedback: Ensure you are being understood by checking with your audience.
