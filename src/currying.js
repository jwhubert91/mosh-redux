function add(a) {
  return function(b) {
    return a + b;
  }
}

const add1 = add(1);
const totalAdded = add1(5);

// Because we know the first function returns a function, we can simply call it, then call that by adding a second pair of parentheses... so the following is another way of writing what's above:

add(1)(5);

// Or, with ES5 arrow functions...

const add2 = a => b => a + b;

// This is an example of currying