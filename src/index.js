/*

IMMUTABILITY

  - In pure functional programming languages data is immutable
  - JS is not a pure func prog lang because you can mutate objects in JS... but you can't mutate strings

  const prevents mutability :)
  let does not


  Benefits of immutability:
  - Predictable - You won't change global state
  - Faster change detection - If object properties cannot be changed, to detect a diff you can simply compare two object properties
  - Concurrency - will not mess up state of system if run in parallel

  Cons of immutability:
  - Performance (with thousands or millions of objects, when copying)
  - Memory overhead (when copying objects)

  Bottom line: If you're using Redux, you should not mutate data.

*/