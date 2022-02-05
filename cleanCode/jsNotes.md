### Primitive types
A primitive type in JavaScript is any value that is not an object:
Number
String
Boolean
Undefined
Null
BigInt
Symbol

All primitive values are immutable. This is a core part of their primitiveness.

It's crucial to note that any decimal value longer than 15 digits cannot be expressed in JavaScript's Number type,
so you'll need to explore other options. JavaScript currently doesn't have a native BigDecimal type, but there are
many third-party libraries available that fulfill a similar purpose.

Watch out when attempting to truncate or establish the width of a piece of text within a UI using only its length
property. Due to the fact that many Unicode symbols may be expressed by multiple code units, using length alone
is not reliable.
```js
console.log(`🥳`.length) // 2
console.log(`👯‍♀`.length) // 4
```

### Reference types
Function is a special object that can be invoked.

#### Typing
Better to check if entities you are working with is doing what you need right now, and not some abstract stuff.
```js
// instead of
function doSmthWithPeople(people) {
  if(!Array.isArray(people)){
    throw new Error('People should be an array');
  }
  for (const man of people) {
    if (!(man instanceof Man)) {
      throw new Error('man should be Man');
    }
    console.log(`Man id: ${man.id} and name: ${man.name} `);
  }
}

// create more specific checks, that will increase flexibility, but there is a limit ofcourse, be careful. 
function doSmthWithPeople(people) {
  const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
  
  if(isIterable(people)){ // Map, Set, Array, String, and everything that implements [Symbol.iterator] correctly is iterable
    throw new Error('People should be an array');
  }
  for (const man of people) {
    if (!man.id || !man.name) { // duck typing
      throw new Error('man should have id and name');
    }
    console.log(`Man id: ${man.id} and name: ${man.name} `);
  }
}
```
