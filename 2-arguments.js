// 2-arguments.js

// process.argv is an array containing the command-line arguments.
// The first element is 'node', the second is the script file path.
// Subsequent elements are the actual arguments passed by the user.

// Calculate the number of user-provided arguments.
// We subtract 2 because the first two elements are 'node' and the script path itself.
const numberOfArguments = process.argv.length - 2;

// Use an if-else if-else structure to check the number of arguments
if (numberOfArguments === 0) {
  // If no arguments are passed (length - 2 equals 0)
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed (length - 2 equals 1)
  console.log("Argument found");
} else {
  // If more than one argument is passed (length - 2 is greater than 1)
  console.log("Arguments found");
}