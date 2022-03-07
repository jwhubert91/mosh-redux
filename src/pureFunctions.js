// PURE FUNCTIONS

/*

A pure function is a function that always returns the same output if given the same input

That means, we cannot use the following in pure functions:
  - Random values
  - Current date / time
  - Global state (like the DOM, files, database, etc.)
  - No mutation of parameters


These are BENEFITS of pure functions:
  - Self-documenting (very readable)
  - Easily testable
  - Concurrency... because we don't use global state, these functions can be run in parallel
  - Cacheable - You only have to perform a computation once and then that can be cached for reuse later. This is because given the same input pure functions always return the same output.

*/

