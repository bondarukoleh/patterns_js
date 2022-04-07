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
