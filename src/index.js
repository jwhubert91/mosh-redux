let input = "   Javascript   ";

let output = "<div>" + input.trim() + "</div>"

console.log(output);

// Let's take the above and rewrite it with func programming principles

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div> `;
const toLowerCase = str = str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

// The above returns the output your want, and the return value is computed by multiple functions at once (or, a function accepting another function, one or more times). This is called function composition.

// As problems get more complex the number of parentheses will get overwhelming...