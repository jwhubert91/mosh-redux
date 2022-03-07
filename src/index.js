function greet(fn) {
  console.log(fn());
}

// A higher order function is a function which takes another function as an argument, as above.

function sayHello() {
  return function() {
    return "Hello World";
  }
}

// Some examples:

// The .map() method which takes a function

// setTimeout() is also an HOC because it takes a function as an argument