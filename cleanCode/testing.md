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
