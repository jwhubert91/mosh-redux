function sayHello() {
  return function() {
    return "Hello World";
  }
}

// The purpose of the below assignment and calls is to demonstrate that functions can be treated like any other object in JS
let fn = sayHello();
let message = fn();


/*

let fn = sayHello();

// The following two functions return the same thing

fn();
sayHello();

// Functions can also be passed to other functions

function greet(fnMessage) {
  console.log(fnMessage())
}

greet(sayHello);

*/