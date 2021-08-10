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
