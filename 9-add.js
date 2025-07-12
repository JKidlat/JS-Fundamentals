// 9-add.js

// Define the function as required by the prototype: function add(a, b)
// This function takes two parameters, 'a' and 'b', and returns their sum.
function add(a, b) {
  return a + b;
}

// Get the first and second command-line arguments.
// These will initially be strings (or undefined if not provided).
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert the arguments to integers using parseInt().
// If an argument is not a valid number, parseInt() will return NaN.
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Call the 'add' function with the converted numbers.
// If either num1 or num2 is NaN, their sum will also be NaN,
// which matches the expected output for invalid inputs.
const result = add(num1, num2);

// Print the result to the console.
console.log(result);