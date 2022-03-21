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
