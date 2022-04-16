## Other Peoples' Code

The first step should always be to seek an understanding of the code and its paradigms. When we have a full understanding
of the code, we can begin to interface with it in a clean way, enabling us to create new functionality or make
improvements on top of existing work.

### Inheriting code
Before we even seek to make the first change, we need to build in our minds a conceptual model of how things work. It's
not necessary for it to be exhaustive and complete, but it must enable us, at a very minimum, to make a change and
understand exactly what effect that change may have on all the moving parts of the code base.

### Exploring and understanding
We need to explore the code to understand how our change will affect it:
- Gather available information: Talk to informed colleagues, read documentation, use the software, internalize the
conceptual structures and hierarchies, and read the source code.
- Make informed assumptions: Fill the gaps of what you aren't sure about with informed assumptions. If you're told that
the app has a registration page, you can intuitively assume that this means user registration involves typical personal
data fields such as name, email, password, and so on.
- Prove or disprove assumptions: Seek to prove or disprove your assumptions by inquiring the system directly (for
example, writing and executing tests), or asking someone who is informed.

> Making a flowchart. It's also helpful to get to know the app's logic. You can come up with much more questions when 
> you try to understand a couple of flows in the app fully.

### Finding structure and observing history 
Avoid getting side tracked when you're completing a task within a legacy or unfamiliar code base. Many things may appear
odd or wrong, but your task must remain the most important thing.

Stepping through the code:
- Where is this code called? How an abstraction is activated.
- What is passed to this code? What input an abstraction receives can help to understand what it does.
- What is outputted by this code? Seeing the output of an abstraction.
- What levels of misdirection or complexity exist here? Observing complex and tall stack traces.

Asserting your assumptions \
One way to understand the obscure code is to write a test for it.
Plus it's make easier to change the code, at least you can check that it's behaviour has not changed.

### Making changes
Minimally invasive surgery \
When changes are needed in an area of the code base that is old or unfamiliar, it can be useful to imagine that you are
performing a kind of minimally invasive surgery. Maximize the positive effect, minimizing the footprint, ensuring not to
damage or have too much impact on other parts of the code base.
It is vital to ensure that we are balancing short-term gains with long-term. But if there is no technical dept or
reconciliation process, then all of these minimally invasive changes can gather into quite a terrifying beast.

Encoding changes as tests \
It's quite normal and preferable to have a team mandate or policy that says you cannot commit a change if it does not
come with a test. Enforcing this will create a code base that produces more reliable functionality and more pleasant to
work with for fellow programmers.


### Dealing with third-party code
When dealing with third-party code, there are two crucial processes that will define the ongoing risks or benefits we
receive. **Selection** process, where we make a choice as to which library to use, and **integration** and adaptation
of the library into our code base.

**Selection and understanding useful considerations:**
- Functionality: lib must fulfill a set of fixed functional expectations. Specify these in a sufficiently detailed way
so that different options can be quantifiably compared.
- Compatibility: must be mostly compatible with the way the code base currently works, and must be able to integrate in a 
way that it is technically simple and easy to understand for colleagues.
- Usability: must be easily usable and understandable. It should have good documentation and a level of intuitiveness
that allows immediate productivity without pain or confusion.
- Maintenance and security: should be maintained and have a clear and trusted process for reporting and resolving bugs,
especially those that may have security ramifications. The changelogs should be exhaustive.

who is the project backed by? how many people are using? Am I familiar with the team who built it? Don't forget about 
cargo cult, most used is not always the best. And don't count only on your decisions, it must be collective decision.
Effort that you put into investigation is equal with importance of lib, if you realize that this will be crsial part of
the app, than you need to spend more time ti investigate it.

**Encapsulating and adapting third-party code** /
Often, we are made to speak the *same language* of these third-party interfaces, instead of having them *speak our language.*
But, in other situations, we may want to be more protected from our chosen abstractions. We may want the option to
easily swap them out for other abstractions in the future. In such cases, it may be useful to encapsulate these 
third-party abstractions and deal with them purely through an abstraction layer of **Adapter**

